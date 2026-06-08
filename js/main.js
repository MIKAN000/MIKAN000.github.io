// ===== Translation dictionary =====
// Keep copy minimal and plain — no slogans / no cheesy taglines.
// To add a language, copy the `en` block, change the values, and add an <option>
// to the <select id="lang-select"> in the HTML. Keys must stay the same.
const I18N = {
  en: {
    nav_videos: "Videos",
    nav_games: "Games",
    nav_more: "More",
    nav_roblox: "Roblox",
    nav_support: "Support",
    nav_store: "Store",
    nav_discord: "Discord",
    nav_policy: "Policy",
    cat_videos: "Videos",
    cat_games: "Games",
    cat_more: "More",
    game_marble: "Marble Playground",
    game_reset: "Reset",
    hero_title: "MIKAN",
    hero_subtitle: "YouTube · Roblox · Goods",
    videos_title: "Videos",
    main_badge: "2D",
    main_desc: "Mostly 2D videos.",
    sub_badge: "3D",
    sub_desc: "Focused on 3D works.",
    subscribe: "Subscribe →",
    videos_loading: "Loading…",
    open_channel: "Open channel →",
    roblox_tag: "Roblox",
    roblox_desc: "Build, play, and share your own marble race courses.",
    roblox_btn: "Play on Roblox →",
    support_title: "Support",
    store_badge: "Store",
    store_desc: "Official goods.",
    store_link: "Visit store →",
    community_badge: "Community",
    discord_join: "Join →",
    // --- hidden sections (kept for later) ---
    play_title: "Play in your browser",
    play_lead: "",
    play_ph1: "A browser game is coming here soon.",
    play_ph2: "",
    mem_badge: "Membership",
    mem_name: "Coming soon",
    mem_desc: "",
    mem_link: "Coming soon",
    // --- footer / policy ---
    footer_policy: "Content Policy",
    contact_label: "Contact:",
    policy_back: "← Back to home",
    policy_title: "Video Content Policy",
    policy_updated: "Last updated: June 2026",
    policy_intro: "This page explains the rules for using my videos.",
    policy_callout: "Reaction, commentary, compilation, and any other reuse of my videos is not allowed without my prior permission. Unauthorized use may be reported to YouTube and removed under its copyright policy.",
    policy_h1: "1. Ownership",
    policy_p1: "Unless stated otherwise, all videos published on my channels are created by and belong to MIKAN. Third-party music remains the property of its respective owners and is used under its own license.",
    policy_h2: "2. What is not allowed",
    policy_deny_intro: "Without my prior permission, you may not:",
    policy_deny_react: "Use my videos in reaction, commentary, compilation, or clip videos.",
    policy_deny_1: "Re-upload my videos, in whole or in part, to any platform.",
    policy_deny_2: "Claim my videos as your own.",
    policy_deny_3: "Use my videos in a misleading, defamatory, or commercial way.",
    policy_deny_4: "Use my videos to train AI models or build datasets.",
    policy_p2b: "Unauthorized use may be reported to YouTube and removed under its copyright policy, which can result in a copyright strike on the uploading channel.",
    policy_scope: "Where permission has been given, it applies only to that specific channel and is not transferable.",
    policy_h3: "3. What you may do",
    policy_allow_intro: "You are welcome to:",
    policy_allow_1: "Share links to my videos and channels.",
    policy_allow_2: "Embed my videos using YouTube's official embed/share feature, unchanged.",
    policy_note: "This policy may be updated from time to time. The \"last updated\" date above reflects the most recent change.",
  },
  ja: {
    nav_videos: "動画",
    nav_games: "ゲーム",
    nav_more: "その他",
    nav_roblox: "Roblox",
    nav_support: "応援",
    nav_store: "ストア",
    nav_discord: "Discord",
    nav_policy: "ポリシー",
    cat_videos: "動画",
    cat_games: "ゲーム",
    cat_more: "その他",
    game_marble: "マーブル広場",
    game_reset: "リセット",
    hero_title: "MIKAN",
    hero_subtitle: "YouTube・Roblox・グッズ",
    videos_title: "動画",
    main_badge: "2D",
    main_desc: "2Dの動画が中心。",
    sub_badge: "3D",
    sub_desc: "3D作品中心のチャンネル。",
    subscribe: "登録 →",
    videos_loading: "読み込み中…",
    open_channel: "チャンネルを開く →",
    roblox_tag: "Roblox",
    roblox_desc: "自分だけのマーブルレースコースを作って、遊んで、共有しよう。",
    roblox_btn: "Robloxで遊ぶ →",
    support_title: "応援",
    store_badge: "ストア",
    store_desc: "公式グッズ。",
    store_link: "ストアへ →",
    community_badge: "コミュニティ",
    discord_join: "参加する →",
    // --- hidden sections (kept for later) ---
    play_title: "ブラウザで遊ぶ",
    play_lead: "",
    play_ph1: "ブラウザゲームを準備中です。",
    play_ph2: "",
    mem_badge: "メンバーシップ",
    mem_name: "近日公開",
    mem_desc: "",
    mem_link: "近日公開",
    // --- footer / policy ---
    footer_policy: "コンテンツポリシー",
    contact_label: "連絡先:",
    policy_back: "← ホームに戻る",
    policy_title: "動画コンテンツポリシー",
    policy_updated: "最終更新: 2026年6月",
    policy_intro: "このページでは、私の動画の使用に関するルールを説明します。",
    policy_callout: "リアクション・解説・まとめ・その他あらゆる形での私の動画の再利用は、事前の許可がない限り禁止です。無断使用はYouTubeへの報告および著作権ポリシーに基づく削除の対象となる場合があります。",
    policy_h1: "1. 権利の帰属",
    policy_p1: "特に記載がない限り、私のチャンネルで公開されるすべての動画は、MIKANが制作し、その権利はMIKANに帰属します。第三者の音楽は各権利者に帰属し、それぞれのライセンスに従って使用しています。",
    policy_h2: "2. 許可されないこと",
    policy_deny_intro: "私の事前の許可なく、以下を行うことはできません。",
    policy_deny_react: "私の動画をリアクション・解説・まとめ・切り抜き動画に使用すること。",
    policy_deny_1: "私の動画（全部または一部）を、いかなるプラットフォームにも再アップロードすること。",
    policy_deny_2: "私の動画を自分のものとして主張すること。",
    policy_deny_3: "私の動画を誤解を招く・名誉を毀損する・商用目的で使用すること。",
    policy_deny_4: "私の動画をAIモデルの学習やデータセット構築に使用すること。",
    policy_p2b: "無断使用はYouTubeへ報告し、著作権ポリシーに基づいて削除される場合があります。その結果、アップロードしたチャンネルに著作権侵害の警告（ストライク）が付くことがあります。",
    policy_scope: "許可を出した場合でも、その許可は許可を出した特定のチャンネルにのみ適用され、第三者に譲渡することはできません。",
    policy_h3: "3. 行ってよいこと",
    policy_allow_intro: "以下は自由に行えます。",
    policy_allow_1: "私の動画やチャンネルへのリンクを共有すること。",
    policy_allow_2: "YouTube公式の埋め込み・共有機能を使って、私の動画をそのまま埋め込むこと。",
    policy_note: "このポリシーは随時更新されることがあります。上部の「最終更新」日が最新の変更を示します。",
  },
};

const LANG_KEY = "mikan-lang";
let currentLang = "en";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  const sel = document.getElementById("lang-select");
  if (sel) sel.value = lang;
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  let lang = saved || (navigator.language || "en").slice(0, 2);
  if (!I18N[lang]) lang = "en";
  applyLang(lang);
  const sel = document.getElementById("lang-select");
  if (sel) sel.addEventListener("change", (e) => applyLang(e.target.value));
}

// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Placeholder links: don't jump to top =====
document.querySelectorAll("a[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") === "#") e.preventDefault();
  });
});

initLang();

// ===== Latest videos (YouTube RSS, no API key needed) =====
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

// Fetch the 3 latest videos for a channel id.
// Tries rss2json first, then allorigins (raw XML) as a fallback proxy.
function parseYouTubeXml(xml) {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  const entries = Array.from(doc.getElementsByTagName("entry")).slice(0, 3);
  return entries.map((en) => {
    const title = en.getElementsByTagName("title")[0]?.textContent || "";
    const link = en.getElementsByTagName("link")[0]?.getAttribute("href") || "";
    let vid = "";
    try { vid = new URL(link).searchParams.get("v") || ""; } catch (e) {}
    return { title, link, vid };
  });
}

async function fetchLatestVideos(id) {
  const rss = `https://www.youtube.com/feeds/videos.xml?channel_id=${id}`;

  // 1) rss2json — free tier works as long as we DON'T pass the `count` param
  try {
    const r = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`);
    const d = await r.json();
    if (d.status === "ok" && d.items && d.items.length) {
      return d.items.slice(0, 3).map((it) => ({
        title: it.title,
        link: it.link,
        vid: (it.guid || "").split(":").pop(),
      }));
    }
  } catch (e) { /* fall through */ }

  // 2) allorigins (raw XML) — fallback proxy
  try {
    const r = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rss)}`);
    if (r.ok) {
      const items = parseYouTubeXml(await r.text());
      if (items.length) return items;
    }
  } catch (e) { /* fall through */ }

  return [];
}

async function loadChannelVideos(channel) {
  const id = channel.dataset.channelId;
  const channelUrl = channel.dataset.channelUrl;
  const box = channel.querySelector("[data-videos]");
  if (!box || !id) return;
  try {
    const items = await fetchLatestVideos(id);
    if (!items.length) throw new Error("no items");
    box.innerHTML = items.map((it) => {
      const thumb = `https://i.ytimg.com/vi/${it.vid}/hqdefault.jpg`;
      return (
        `<a class="video" href="${it.link}" target="_blank" rel="noopener">` +
        `<div class="video__thumb"><img src="${thumb}" alt="" loading="lazy" /></div>` +
        `<p class="video__title">${escapeHtml(it.title)}</p></a>`
      );
    }).join("");
  } catch (e) {
    box.innerHTML =
      `<a class="video-fallback" href="${channelUrl}" target="_blank" rel="noopener" data-i18n="open_channel">Open channel →</a>`;
    applyLang(currentLang);
  }
}

// Load channels one at a time so the two requests don't hit the proxy at once,
// then load products. Since dynamic content changes the page height, re-scroll
// to any #hash target afterwards so cross-page anchor links land correctly.
(async () => {
  for (const ch of document.querySelectorAll(".channel")) {
    await loadChannelVideos(ch);
  }
  await loadProducts();
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView();
  }
})();

// ===== Fourthwall products (Storefront API) =====
const STORE_URL = "https://mikan-sqr-shop.fourthwall.com";
const FOURTHWALL_TOKEN = "ptkn_84a91003-39c2-4354-b181-fabec544cc57"; // read-only storefront token (public products only)

function formatPrice(pr) {
  if (!pr) return "";
  const sym = { JPY: "¥", USD: "$", EUR: "€", GBP: "£" }[pr.currency] || "";
  const v = Number(pr.value);
  const n = Number.isFinite(v) ? (Number.isInteger(v) ? v.toLocaleString() : v.toFixed(2)) : pr.value;
  return sym ? `${sym}${n}` : `${pr.value} ${pr.currency}`;
}

async function loadProducts() {
  const box = document.querySelector("[data-fw-products]");
  if (!box || !FOURTHWALL_TOKEN) return;
  try {
    const r = await fetch(`https://storefront-api.fourthwall.com/v1/collections/all/products?storefront_token=${FOURTHWALL_TOKEN}`);
    const d = await r.json();
    const items = (d.results || []).slice(0, 8);
    if (!items.length) return;
    box.innerHTML = items.map((p) => {
      const im = p.images && p.images[0];
      const img = (im && (im.transformedUrl || im.url)) || "";
      const price = formatPrice(p.variants && p.variants[0] && p.variants[0].unitPrice);
      const href = p.slug ? `${STORE_URL}/products/${p.slug}` : STORE_URL;
      return (
        `<a class="product" href="${href}" target="_blank" rel="noopener">` +
        `<div class="product__thumb"><img src="${img}" alt="" loading="lazy" /></div>` +
        `<p class="product__name">${escapeHtml(p.name)}</p>` +
        (price ? `<p class="product__price">${escapeHtml(price)}</p>` : "") +
        `</a>`
      );
    }).join("");
  } catch (e) { /* keep the store card */ }
}
