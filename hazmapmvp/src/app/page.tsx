'use client'

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SectionTitle from "./components/sectionTitle";
import SearchBar from "./components/searchbar";

/* Home Page  */

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Using ONS data to ensure accuracy"
        title="Search starts here"
      >
        Enter your search parameters below.
      </SectionTitle>
      <SearchBar />
    </>
  );
}
