// Fetches all public badges from a Credly profile at build time.

export interface Badge {
  id: string;
  name: string;
  issuer: string;
  issuedAt: string;
  image: string;
  url: string;
}

export async function getCredlyBadges(username: string): Promise<Badge[]> {
  const badges: Badge[] = [];
  let page = 1;
  let totalPages = 1;

  try {
    do {
      const res = await fetch(`https://www.credly.com/users/${username}/badges.json?page=${page}`);
      if (!res.ok) throw new Error(`Credly responded ${res.status}`);
      const json = await res.json();

      for (const b of json.data ?? []) {
        badges.push({
          id: b.id,
          name: b.badge_template?.name ?? 'Badge',
          issuer: b.issuer?.entities?.[0]?.entity?.name ?? '',
          issuedAt: b.issued_at_date,
          image: b.image_url ?? b.badge_template?.image_url,
          url: `https://www.credly.com/badges/${b.id}/public_url`,
        });
      }

      totalPages = json.metadata?.total_pages ?? 1;
      page++;
    } while (page <= totalPages);
  } catch (err) {
    // Don't fail the whole build if Credly is unreachable.
    console.warn('[credly] could not fetch badges:', err);
  }

  return badges.sort((a, b) => b.issuedAt.localeCompare(a.issuedAt));
}
