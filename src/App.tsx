/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Rituals from "./components/Rituals";
import AboutFaq from "./components/AboutFaq";
import CtaFooter from "./components/CtaFooter";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="bg-[#0f1712] font-sans text-white selection:bg-[#d8b979] selection:text-black">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Showcase />
      <Rituals />
      <AboutFaq />
      <CtaFooter />
    </div>
  );
}
