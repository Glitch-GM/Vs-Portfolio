/* ============================================================
   EDIT HERE. Everything on the page is driven by this block.
   Change the text between the quotes, save, and republish.
   Leave a list empty ( [] ) to hide that section.
   ============================================================ */
const SITE = {
  name: "Gulshan",
  headline: "Helping brands & creators grow their reach",
  subline: "I help you create better content through story, motion, sound and design.",
  email: "gulshanmurmu23@gmail.com",
  primaryButton: { label: "Send me a DM", url: "https://www.instagram.com/ae_glitch/" },
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/ae_glitch/", icon: "png/icon-instagram.png" },
    { label: "X", url: "https://x.com/GulshanMurmu1", icon: "png/icon-x.png" }
  ],

  // Brands or creators you have worked with. Names only. Empty list hides the row.
  clients: [],

  longForm: {
    title: "Long form edits",
    items: [
      // YouTube embed: add youtube: "VIDEO_ID" (the code after /embed/ in the embed link). It plays right on the page.
      // Custom thumbnail: add thumbnail with the path of your image. Replace the file in png/thumbnails/ with your own 16:9 image (1920x1080).
      // With a thumbnail, one click opens the video on YouTube. Remove it to play the video right on the page.
      // Link tile: use url + runtime instead, it opens the video in a new tab.
      { title: "Long form edit", type: "YouTube video", youtube: "0yVQfdUNDDM", thumbnail: "png/thumbnails/long-1.png" },
      { title: "Long form edit", type: "YouTube video", youtube: "" },
      { title: "Long form edit", type: "YouTube video", youtube: "" },
      { title: "Long form edit", type: "YouTube video", youtube: "" },
      { title: "Long form edit", type: "YouTube video", youtube: "" },
      { title: "Long form edit", type: "YouTube video", youtube: "" }
    ]
  },

  shortForm: {
    title: "Short form edits",
    items: [
      // Instagram embed: add instagram: "REEL_ID" or paste the full reel link. Empty slots stay hidden.
      // Custom thumbnail: add thumbnail with the path of your image. Replace the file in png/thumbnails/ with your own 9:16 image (1080x1920).
      // Remove the thumbnail part to show the Instagram player directly.
      { title: "Short form edit", type: "Instagram reel", instagram: "DNdOHaANIpt", thumbnail: "png/thumbnails/reel-1.png" },
      { title: "Short form edit", type: "Instagram reel", instagram: "https://www.instagram.com/reel/C1ZyLYjP0Ey/", thumbnail: "png/thumbnails/reel-2.png" },
      { title: "Short form edit", type: "Instagram reel", instagram: "" },
      { title: "Short form edit", type: "Instagram reel", instagram: "" }
    ]
  },

  // Real client quotes only. Shape: { quote: "...", name: "...", role: "..." }
  // Show or hide the whole Client testimonials section: true = show, false = hide. Your quotes below are kept.
  showTestimonials: true,

  testimonials: [
    { quote: "Your client's words go here. Send me a real quote and I will replace this one.", name: "Client name", role: "Brand or channel", sample: true },
    { quote: "A second quote can go here, about turnaround, communication or how the video performed.", name: "Client name", role: "Brand or channel", sample: true }
  ],

  why: {
    title: "Why work with me",
    items: [
      { title: "Better designs", text: "Most editors focus on effects. I focus on design, layout and clarity." },
      { title: "Fast turnarounds", text: "You won't have to chase updates. I respect deadlines and deliver on time." },
      { title: "Easy communication", text: "Clear updates, quick replies and no confusion about project status." }
    ]
  }
};
/* ============================ end of editable block ============================ */
