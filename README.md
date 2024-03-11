# WIP - fullstack ecommerce project

![thumbnail](/docs/thumbnail.png)

a really fun uncertain journey for me. from knowing 10% of sveltekit to 50% of it. I can predict there's still so much to learn on this framework, and I can say that I still understand the tip of the iceberg of this framework.

other people use svelte-superforms, zod, and other things to validate client and server incoming data. that definitely will be my next journey on sveltekit.

planned to create api routes with this framework but I think the scale of the project is still manageable with monolithic approach.

## thoughts on this journey

I really enjoyed creating the component views of the website. It is really simple and well you can say ... elegant. I know maybe my code is not that 'beautiful' nor 'efficient' because this is the first time I use sveltekit in a 'real project'.

For the future journey of svelte, Idk tbh... I can't say that much, I haven't handled such big codebases with this framework. I haven't tried the 'store' approach, an alternative to redux maybe(?), well idk. Idk that much at this point.

To understand deeper about this project, well I guess I need to *at least* finish the current roadmap, available in the [.excalidraw](/docs/roadmap.excalidraw) file.

I also believe that any javascript framework really have a big rabbit hole where it hides the complexity of an app. and... I planned to do a bottom-up approach (get to know htmx) instead of top-down approach (this project, or any js framework).

Above is really a highly personal opinionated take. and it may be weightless for some of this reader. It's just... thoughts from my mind when embarking on this journey on only for few days.

## the tech stack I use

- Sveltekit (Fullstack)
- Lucia (Auth)
- Drizzle (ORM) - with Postgres
- Flowbite (FE-Design)
- Shadcn-svelte (FE-Design)

## If one day I forgot on how to run this project

- clone this repo
- run this script to install required packages:

  ```bash
  pnpm install
  ```

- create .env for DATABASE_URL (postgres)
- generate database

  ```bash
  pnpm generate
  pnpm db:seed
  pnpm db:push
  ```

  ```bash
  pnpm run dev
  ```

- you can also run:

  ```bash
  pnpm generate # to generate sql and available in /migrations
  pnpm db:seed # to seed the database (only user data currently available)
  pnpm db:push # to migrate
  pnpm db:studio # open drizzle studio to view the data
  ```

  more of it available on the [package.json](/package.json) file

- do your thing!

## Super useful references for continuing this project

- [svelte tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [step back and build to do list app](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
- [midtrans thingy](https://youtu.be/tdDARiQOmZE?si=NdqQi3dcS2zTOdCO)
- [future refactor](https://kit.svelte.dev/docs/performance)

## Future To Do List

- [ ] Finish the roadmap
- [ ] Refactor the code
- [ ] Scale this project (optional)

## Side note

the readme of generated svelte project can be found in [README-SVELTE.md](/README-SVELTE.md)
