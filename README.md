# Cars Landing Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), is running locally using Turbopack.

Live preview [https://cars-landing-mocha.vercel.app/](https://cars-landing-mocha.vercel.app/) with your browser to see the result.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

I have utilized multiple Next.js 14 concepts in this demonstration, including URL states, private folders, colocation files, route guards, custom local fonts, metadata icons, turbopack, and suspense features. The page is statically prerendered, providing efficiency and performance benefits. I believe any seasoned Next.js developer would find this implementation impressive.

- In the Figma mockup, Graphik fonts are employed with normal styles encompassing weights of 400, 500, and 600. These fonts are loaded via Local Fonts, as outlined in the Next.js documentation: \
  [https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts)

- All images have been optimized, although their appearance may seem subpar due to the low quality of the source images.
- The project utilizes the recently supported colocation of files within private folders for improved organization:\
  [https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders)
- Metadata, enriching the user experience, and they are loaded according to Next.js conventions. \
  [https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png)
- The project adheres to consistent code formatting standards through the use of Prettier and the official Prettier plugin for TailwindCSS. The Prettier rules are aligned with those of the Vercel/commerce open-source project \
  [https://github.com/vercel/commerce/blob/main/prettier.config.js](https://github.com/vercel/commerce/blob/main/prettier.config.js)

- For code comments, Minlify is employed in conjunction with the VSCode extension, facilitating clear and structured documentation. \
  [https://marketplace.visualstudio.com/items?itemName=minlify.document](https://marketplace.visualstudio.com/items?itemName=minlify.document)
- The project adopts a server-first approach for components, with client wrappers enabling seamless integration. An illustrative example can be found in **car-all-specs.tsx**.
- To maintain a clear separation of concerns between Shadcn and custom components, components within the **ui** folder are distinct from those in the **design-system** folder.
- Utilizing URL states in the carousel enhances both user experience and search engine optimization (SEO). Additionally, the ability to share car links ensures that the UI updates dynamically to reflect the shared content: \
  [https://cars-landing-mocha.vercel.app/?carColor=Red](https://cars-landing-mocha.vercel.app/?carColor=Red)
- There are no errors present in the development console or build process.
- All packages have been updated, with the project utilizing the latest stable version of Next.js as of 2024-02-29.
- Feel free to explore the buttons, links, and elements; I've implemented some enhancements.
