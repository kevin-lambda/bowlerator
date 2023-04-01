- layout comes with {children} prop, which IS a child layout if it exists, or a page
- **get data at the parent level** then pass down to components. should not try to get data at lower levels. harder to pass data UP
- probably best to import images, rather than directly reference via path
  /_ this is how to do hero banner images in a section!_/
  .hero {
  background-image: url("../assets/hero.jpg");
  background-size: cover; /_ Resize the background image to cover the entire container _/
  background-position: center; /_ Center the image _/
  }

then set the container size

photo credits

Photo by <a href="https://unsplash.com/@elizabethlee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chaewon Lee</a> on <a href="https://unsplash.com/photos/sBOl-XPYv9M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@yoavaziz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yoav Aziz</a> on <a href="https://unsplash.com/photos/AiHJiRCwB3w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@monstruoestudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monstruo Estudio</a> on <a href="https://unsplash.com/photos/lQy6mHZ7fYk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@iemanuel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">I E</a> on <a href="https://unsplash.com/photos/KRGFXJWIo2Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/ko/@icons8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Icons8 Team</a> on <a href="https://unsplash.com/photos/seDjj4dmC9s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## typescript

- declare an object

```
type Person = { name: string, age: number };

const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 }
];

```

- declare an array of objects

```
const people: { name: string, age: number }[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 }
];
```

- to take the easy way out give an declaration of `any`
  `const obj: any = {}`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
