export const prices: PricesType[] = [
    {
      name: "Hosting and Domain",
      items: [
        {
            name: "Managed hosting and domain renewal",
            info: "We handle your website hosting and renew your domain so you never miss a deadline.",
            planIncluded: ["1", "2", "3"],
            value: 50,
            required: true,
        },
      ]
    },
    {
      name: "Website Building",
      items: [
        {
          name: "Development",
          info: "We build and maintain your website’s structure, features, and functionality.",
          planIncluded: ["1", "2", "3"],
          value: 800,
          required: true,
        },
        {
          name: "Responsive design",
          info: "Your site looks great and works smoothly on all screen sizes—phones, tablets, and desktops",
          planIncluded: ["1", "2", "3"],
          value: 350,
          required: true,
        },
        {
          name: "Content creation (Copy and Images)",
          info: "We write engaging text and provide high-quality images tailored to your brand",
          planIncluded: ["2", "3"],
          value: 250
        },
      ]
    },
    {
        name: "Maintenance",
        items: [
            {
                name: "Updates, Bug fixes or downtime repairs",
                info: "We keep your site running smoothly by fixing errors and addressing technical issues quickly",
                planIncluded: ["2", "3"],
                value: 180
            },
            {
                name: "Updating website sections",
                info: "Need changes to text, images, or layouts? We update your site’s sections as needed.",
                planIncluded: ["3"],
                value: 50
            },
            {
                name: "Performance optimization",
                info: "We improve loading times and site speed to enhance user experience and SEO.",
                planIncluded: ["3"],
                value: 30
            },
        ]
    },
    {
        name: "Rank higher on Google",
        items: [
            {
                name: "Meta descriptions, Alt tags",
                info: "We add SEO-friendly meta descriptions and alt tags to improve your site’s visibility on search engines.",
                planIncluded: ["2", "3"],
                value: 120
            },
            {
                name: "Keyword research",
                info: "We identify the best search terms your audience is using to find services like yours.",
                planIncluded: ["3"],
                value: 50
            },
            {
                name: "Link building",
                info: "We create quality backlinks to help boost your site's authority and rankings.",
                planIncluded: ["3"],
                value: 50
            },
            {
                name: "Content strategies",
                info: "We plan what content to create and how to deliver it to attract and retain your audience.",
                planIncluded: ["3"],
                value: 70
            },
        ]
    },
    {
        name: "Custom Updates",
        items: [
            {
                name: "Page redesign or new sections",
                info: "We redesign existing pages or build new sections to improve design and functionality.",
                planIncluded: ["3"],
                value: 150
            },
        ]
    },
    {
        name: "Metric Analysis and Reports",
        items: [
            {
                name: "Installation and configuration of Google Analytics",
                info: "We set up Google Analytics so you can track visitors, user actions, and conversions.",
                planIncluded: ["3"],
                value: 100
            },
            {
                name: "Monthly reports on traffic, user behavior ...",
                info: "Get monthly insights on your website’s performance, visitor activity, and engagement trends.",
                planIncluded: ["3"],
                value: 200
            },
        ]
    },
]

export type PricesType = {
  name: string;
  items: PriceItemsType[];
}

export type PriceItemsType = {
  name: string;
  planIncluded: string[];
  value: number;
  required?: boolean;
  info: string;
}