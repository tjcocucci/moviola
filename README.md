# Moviola

This is a little movie application built with Next.js that allows users to browse and add movies to their favorites list.


### Authors
- Santiago Cafferatta
- Tadeo Javier Cocucci

## Features

- Fetches movie data from TMDB to display a list of movies.
- Users can add movies to their favorites list.
- Users can view their favorites list on a separate page.
- Persists favorites list using local storage.

## Technologies Used

- [Next.js](https://nextjs.org/): For building the application with the new app directory for structure and routing.
- [Context API](https://react.dev/reference/react/useContext): For sharing data across components.
- [TMDB API](https://www.themoviedb.org/documentation/api): An API to collect movie data.
- [SWR](https://swr.vercel.app/): For data fetching.
- [Tailwind CSS](https://tailwindcss.com/): For inline styling the components.
- [Vitest](https://vitest.netlify.app/): For unit testing the components.
- [pnpm](https://pnpm.io/): For package management.
- [Trello](https://trello.com/): For project management.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone github.com/tjcocucci/moviola.git
   ```

2. Install the dependencies:

   ```bash
   cd moviola
   pnpm install
   ```

### Usage

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the movie application.

### Testing

To run the tests:

```bash
pnpm test
```

To run a coverage report:

```bash
pnpm coverage
```

## TODOs

- Make the API key configurable instead of hardcoding it.
- Implement pagination for the main page to load and display movies in batches or maybe and endless scroll.
- Add support for multiple lists, allowing users to create and manage different favorites lists.
- Create a header and footer for additional information and links.


## Development Process and Challenges

During the development of our movie application, we used a Trello board for project management and to organize work with tickets. We started with wrapping the TMDB API and fetching movie data to display a list of movies. Then we made a searchbar which filters by date, uses a query string and can sort by popularity or release date. We then added the ability to add movies to a favorites list and display it on a separate page. Finally, we included local storage to persist the list. Then we made unit tests, wrote the documentaton and finally deployed the application to Vercel.

One of the major challenges we encountered was how to persist the selected movie list across different pages. We wanted users to be able to add movies to their favorites list and view it on a separate page. After some consideration, we decided to use local storage to store the selected movie list. While we were unsure if client-side storage was the best option, we decided it was a suitable solution this small project.

Overall, we are pleased with the outcome of the project. Although it is a relatively simple application, we were able to apply the concepts and techniques we learned during our bootcamp. We belive that the searchbar functionality is quite interesting and it correclty transforms the form data into an appropiate API request.

Looking ahead, we believe the application has the potential for expansion in terms of functionality. One idea we discussed is integrating a tierlist feature similar to those found on [tiermaker.com](https://tiermaker.com/). There are many movie-related apps available (like [Letterboxd](https://letterboxd.com/), but they do not feature tierlists. The problem of using tiermaker is that it is not movie-specific so it would require to manually add each movie title and poster to the list.
