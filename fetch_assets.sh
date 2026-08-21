#!/usr/bin/env bash
set -euo pipefail
BASE="https://www.bharatpetroleum.in"
OUT="client/public/manus-storage"
mkdir -p "$OUT"
fetch() {
  local src="$1" dst="$2"
  curl --connect-timeout 5 --max-time 20 --retry 2 --retry-delay 1 -fsSL "$BASE$src" -o "$OUT/$dst"
}
fetch /images/BPCL_transparent_logo_new.png bpcl-logo_216bb070.png
fetch /images/img_smart-line.png smartline_40d4ff4e.png
fetch /images/bh-gas-logo.png bharatgas_9983c632.png
fetch /images/forbes-wbe-2025-logo-11-2-26.png forbes_4db26ea7.png
fetch /images/innerpagebanner/bpcl_innerpage_default_banner.jpg bikes-banner_dc5c0855.jpg
fetch /images/mak-product/thumb/MAK4T-NXT-Synth-2.jpg nxt-synth_d85b3d0c.jpg
fetch /images/mak-product/thumb/MAK4T-NXT-Pro-2.jpg nxt-pro_4374f75e.jpg
fetch /images/mak-product/thumb/MAK4T-NXT-15W-50-2.jpg nxt-15w50_957caa7c.jpg
fetch /images/mak-product/thumb/MAK4T-NXT-20W-50-2.jpg nxt-20w50_62f96913.jpg
fetch /images/mak-product/thumb/MAK4T-NXT-2.jpg mak-2t_d74433e0.jpg
fetch /images/mak-product/thumb/MAK4T-NXT-20W-40-2.jpg nxt-20w40_61bda564.jpg
fetch /images/mak-product/thumb/MAK4T-Scootech-NXT-2.jpg scootech-nxt_94a9fd4c.jpg
fetch /images/MAK-4T-Star-1.png mak-4t-star_3f9a7d20.png
fetch /images/mak-product/thumb/t-Mak-4T-Scootech-10W-30.png scootech-10w30_d2e4c691.png
printf 'Downloaded %s assets to %s\n' "$(find "$OUT" -type f | wc -l)" "$OUT"
