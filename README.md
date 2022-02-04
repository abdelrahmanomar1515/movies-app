## Environment

Node: v16.13.2
NPM: 7.6.1

## Local Development

```
npm install
npm run dev
```

## Build

```
npm run build
```

This will create static files in `/dist`
If you want to run the produced app files, run `npm run preview`

## Structure

The application is divided into modules. Each module has its own components, pages, store and api. There is also a shared `utils` directory where common logic is shared. The following is a brief description of each directory.

### API

This is where data fetching logic is defined so it can be reused accross components.

### Store

This is where any state specific to the module and shared accross components is defined.

### Pages

This is where different pages are defined.
The pages can be stateful and they correspond to a route.

### Components

These are standalone presentational only components. They accept props and emit events. They should not interact with the store.

### Types

This is where type declarations specific to the module are defined.

### Utils

Common functions that are shared accross the whole application.

---

## Notes

- I skipped the UI part of the show details page for simplicity.
- I skipped unit tests for simplicity.
- Filtering of shows based on search or genre happens entirely on the FE. The reason is I found that the API doesn't allow searching by genre. However, the API allows filtering by name, but the return type of such api call will add more complexity to the code. In a real world situation, both genre and search would be filtered in the BE.
