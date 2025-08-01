const toolkits = [
  {
    label: "Home",
    short_label: "Home",
    icon: "home",
    url: "/",
  },
  {
    label: "SEO",
    short_label: "SEO",
    icon: "seo",
    url: "/seo/",
    items: [
      {
        items: [
          {
            label: "SEO Dashboard",
            url: "/seo/",
          },
          {
            label: "AI Marketing Booster",
            url: "/ai-marketing-workflow/",
          },
        ],
      },
      {
        label: "Competitive Research",
        items: [
          {
            label: "Domain Overview",
            url: "/analytics/overview/",
          },
          {
            label: "Organic Research",
            url: "/analytics/organic/overview/",
          },
          {
            label: "Keyword Gap",
            url: "/analytics/keywordgap/",
          },
          {
            label: "Backlink Gap",
            url: "/analytics/gap/backlinks/",
          },
        ],
      },
      {
        label: "Keyword Research",
        items: [
          {
            label: "Keyword Overview",
            url: "/analytics/keywordoverview/",
          },
          {
            label: "Keyword Magic Tool",
            url: "/analytics/keywordmagic/",
          },
          {
            label: "Keyword Strategy Builder",
            url: "/analytics/keywordmanager/",
          },
          {
            label: "Position Tracking",
            url: "/position-tracking/",
          },
          {
            label: "Organic Traffic Insights",
            url: "/organic_traffic_insights/",
          },
        ],
      },
      {
        label: "Link Building",
        items: [
          {
            label: "Backlink Analytics",
            url: "/analytics/backlinks/overview/",
          },
          {
            label: "Backlink Audit",
            url: "/backlink_audit/",
          },
          {
            label: "Link Building Tool",
            url: "/link_building/",
          },
          {
            label: "Bulk Analysis",
            url: "/batch/",
          },
        ],
      },
      {
        label: "On Page & Tech SEO",
        items: [
          {
            label: "Site Audit",
            url: "/siteaudit/",
          },
          {
            label: "On Page SEO Checker",
            url: "/on-page-seo-checker/",
          },
          {
            label: "Log File Analyzer",
            url: "/log-file-analyzer/",
          },
        ],
      },
      {
        label: "Content ideas",
        items: [
          {
            label: "SEO Writing Assistant",
            url: "/swa/",
          },
          {
            label: "Topic Research",
            url: "/topic-research/",
          },
          {
            label: "SEO Content Template",
            url: "/seo-content-template/",
          },
        ],
      },
      {
        label: "Extras",
        items: [
          {
            label: "Sensor",
            url: "/sensor/?utm_source=semrush&utm_medium=footer",
          },
          {
            label: "SEOquake",
            url: "https://www.seoquake.com/",
          },
          {
            label: "Semrush Rank",
            url: "/analytics/ranks/rank/",
          },
        ],
      },
    ],
  },
  {
    divider: true,
  },
  {
    label: "Traffic & Market (.Trends)",
    short_label: "Traffic & Market",
    icon: "market",
    url: "/analytics/traffic/",
    items: [
      {
        items: [
          {
            label: "Get Started",
            url: "/analytics/traffic/",
          },
          {
            label: "Insider Knowledge",
            url: "/analytics/traffic/insider-knowledge",
          },
        ],
      },
      {
        items: [
          {
            label: "Traffic Analytics",
            url: "/analytics/traffic/traffic-overview/",
          },
          {
            label: "Daily Trends",
            url: "/analytics/traffic/daily-trends/",
          },
        ],
      },
      {
        label: "Traffic Distribution",
        items: [
          {
            label: "AI Traffic",
            url: "/analytics/traffic/ai-traffic/",
          },
          {
            label: "Referral",
            url: "/analytics/traffic/referral/",
          },
          {
            label: "Organic Search",
            url: "/analytics/traffic/organic-search/",
          },
          {
            label: "Paid Search",
            url: "/analytics/traffic/paid-search/",
          },
          {
            label: "Organic Social",
            url: "/analytics/traffic/organic-social/",
          },
          {
            label: "Paid Social",
            url: "/analytics/traffic/paid-social/",
          },
          {
            label: "Email",
            url: "/analytics/traffic/email/",
          },
          {
            label: "Display Ads",
            url: "/analytics/traffic/display-ads/",
          },
          {
            label: "Sources & Destinations",
            url: "/analytics/traffic/sources-destinations/",
          },
        ],
      },
      {
        label: "Pages and Categories",
        items: [
          {
            label: "Top Pages",
            url: "/analytics/traffic/top-pages/",
          },
          {
            label: "Subfolders & Subdomains",
            url: "/analytics/traffic/subfolders-subdomains/",
          },
          {
            label: "Page Groups",
            url: "/analytics/traffic/page-groups/",
          },
          {
            label: "Funnel Analysis",
            url: "/analytics/traffic/funnel-analysis/",
          },
        ],
      },
      {
        label: "Regional Trends",
        items: [
          {
            label: "USA",
            url: "/analytics/traffic/usa/",
          },
          {
            label: "Countries",
            url: "/analytics/traffic/countries/",
          },
          {
            label: "Business Regions",
            url: "/analytics/traffic/business-regions/",
          },
          {
            label: "Geographical Regions",
            url: "/analytics/traffic/geographical-regions/",
          },
        ],
      },
      {
        label: "Audience Profile",
        items: [
          {
            label: "Audience Overlap",
            url: "/analytics/traffic/audience-overlap/",
          },
          {
            label: "Demographics",
            url: "/analytics/traffic/demographics/",
          },
        ],
      },
      {
        label: "Market",
        items: [
          {
            label: "Market Overview",
            url: "/analytics/traffic/market-overview/",
          },
          {
            label: "Trending Websites",
            url: "/trending-websites/global/all/",
          },
          {
            label: "Bulk Analysis",
            url: "/analytics/traffic/bulk-analysis/",
          },
        ],
      },
      {
        items: [
          {
            label: "EyeOn",
            url: "/eyeon/",
          },
          {
            label: "Trends API",
            url: "/analytics/traffic/trends-api",
          },
        ],
      },
    ],
  },
  {
    label: "Local",
    short_label: "Local",
    icon: "local",
    url: "/local-business/",
    items: [
      {
        items: [
          {
            label: "Local Dashboard",
            url: "/local-business/",
          },
        ],
      },
      {
        items: [
          {
            label: "GBP Optimization",
            url: "/gbp-optimization/",
          },
          {
            label: "Listing Management",
            url: "/listings-management/",
          },
          {
            label: "Map Rank Tracker",
            url: "/map-rank-tracker/",
          },
          {
            label: "Review Management",
            url: "/review-management/",
          },
        ],
      },
    ],
  },
  {
    label: "Content",
    short_label: "Content",
    icon: "content",
    url: "/content/",
    items: [
      {
        items: [
          {
            label: "Content Dashboard",
            url: "/content/",
          },
        ],
      },
      {
        items: [
          {
            label: "Content Scaler",
            url: "/content/scaler/",
          },
          {
            label: "Topic Finder",
            url: "/content/topic-finder/",
          },
          {
            label: "SEO Brief Generator",
            url: "/content/briefs/create/",
          },
          {
            label: "AI Article Generator",
            url: "/content/articles/create/",
          },
          {
            label: "Content Optimizer",
            url: "/content/articles/optimize/",
          },
          {
            label: "My Content",
            url: "/content/articles/",
          },
        ],
      },
    ],
  },
  {
    label: "AI",
    short_label: "AI",
    icon: "ai",
    url: "/semrush-ai-toolkit/",
    items: [
      {
        label: "See the Big Picture",
        items: [
          {
            label: "Brand Performance",
            url: "/semrush-ai-toolkit/brand-performance/",
          },
        ],
      },
      {
        label: "Dive Deeper",
        items: [
          {
            label: "Visibility",
            url: "/semrush-ai-toolkit/visibility/",
          },
          {
            label: "Perception",
            url: "/semrush-ai-toolkit/perception/",
          },
          {
            label: "Questions",
            url: "/semrush-ai-toolkit/questions/",
          },
        ],
      },
    ],
  },
  {
    label: "Social",
    short_label: "Social",
    icon: "social",
    url: "/social-media/",
    items: [
      {
        items: [
          {
            label: "Social Dashboard",
            url: "/social-media/",
          },
        ],
      },
      {
        label: "Core",
        items: [
          {
            label: "Social Poster",
            url: "/social-media/?tool=poster",
          },
          {
            label: "Social Tracker",
            url: "/social-media/?tool=tracker",
          },
          {
            label: "Social Content Insights",
            url: "/social-media/?tool=content-insights",
          },
          {
            label: "Social Analytics",
            url: "/social-media/?tool=analytics",
          },
          {
            label: "Social Content AI",
            url: "/social-content-ai",
          },
        ],
      },
      {
        label: "Advanced",
        items: [
          {
            label: "Influencer Analytics",
            url: "/apps/influencer-marketing-platform/",
          },
          {
            label: "Influencer Analytics",
            url: "/influencer-analytics/",
          },
          {
            label: "Media Monitoring",
            url: "/apps/media-monitoring/",
          },
          {
            label: "Media Monitoring",
            url: "/media-monitoring/",
          },
        ],
      },
    ],
  },
  {
    label: "Advertising",
    short_label: "Ad",
    icon: "advertising",
    url: "/advertising/",
    items: [
      {
        items: [
          {
            label: "Get Started",
            url: "/advertising/",
          },
        ],
      },
      {
        items: [
          {
            label: "Ads Launch Assistant",
            url: "/advertising/ads-launch-assistant",
          },
          {
            label: "Advertising Research",
            url: "/analytics/adwords/positions/",
          },
          {
            label: "Ads History",
            url: "/analytics/phrase/",
          },
          {
            label: "PLA Research",
            url: "/analytics/pla/positions/",
          },
          {
            label: "PPC Keyword Tool",
            url: "/advertising/ppc-keyword/",
          },
          {
            label: "AdClarity",
            url: "/apps/adclarity-advertising-intelligence/",
          },
        ],
      },
    ],
  },
  {
    divider: true,
  },
  {
    label: "Reports",
    short_label: "Reports",
    icon: "reports",
    url: "/reports/",
    items: [
      {
        items: [
          {
            label: "My Reports",
            url: "/reports/",
          },
        ],
      },
      {
        label: "Top Templates",
        items: [
          {
            label: "Google Analytics 4",
            url: "/reports/google-analytics-4/",
          },
          {
            label: "Google Search Console",
            url: "/reports/google-search-console/",
          },
          {
            label: "Monthly SEO",
            url: "/reports/monthly-seo/",
          },
        ],
      },
      {
        items: [
          {
            label: "Create Report",
            url: "/reports/create/",
          },
          {
            label: "Templates",
            url: "/reports/templates/",
          },
          {
            label: "Themes",
            url: "/pr-toolkit/settings/domains/",
          },
          {
            label: "About My Reports",
            url: "/reports/about/",
          },
        ],
      },
    ],
  },
  {
    label: "App Center",
    short_label: "App Center",
    icon: "apps",
    url: "/app-center/",
    items: [
      {
        items: [
          {
            label: "Store",
            url: "/app-center/",
          },
          {
            label: "My Apps",
            url: "/app-center/my-apps/",
          },
        ],
      },
    ],
  },
];

export { toolkits };
