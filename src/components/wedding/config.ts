// Centralized wedding configuration — single source of truth for every
// invitation detail and every transparent PNG asset.

import bananaLeaf1 from "@/assets/wedding/banana_leaf_1.webp";
import bananaLeaf2 from "@/assets/wedding/banana_leaf_2.webp";
import bananaLeaf3 from "@/assets/wedding/banana_leaf_3.webp";
import bananaTree from "@/assets/wedding/banana_tree.webp";
import mangoBunch from "@/assets/wedding/mango_bunch.webp";
import garlandLong from "@/assets/wedding/garland_1.webp";
import garlandShort from "@/assets/wedding/garland_2.webp";
import foliageBranch from "@/assets/wedding/foliage_branch.webp";
import pinkBud from "@/assets/wedding/pink_bud.webp";
import kalash from "@/assets/wedding/kalash.webp";
import bottomFoliage from "@/assets/wedding/bottom_foliage.webp";
import marigoldOrange from "@/assets/wedding/marigold_orange.webp";
import marigoldYellow from "@/assets/wedding/marigold_yellow.webp";
import flowerPink from "@/assets/wedding/flower_pink.webp";
import petal from "@/assets/wedding/petal.webp";
import templeWatermark from "@/assets/wedding/temple_watermark.webp";
import templeMain from "@/assets/wedding/temple_main.webp";
import coupleVarmala from "@/assets/wedding/couple_varmala.webp";
import brideGreeting from "@/assets/wedding/bride_greeting.webp";
import girlPraying from "@/assets/wedding/girl_praying.webp";
import coupleGreeting from "@/assets/wedding/couple_greeting.webp";
import elephantCouple from "@/assets/wedding/elephant_couple.webp";
import ganesha from "@/assets/wedding/ganesha.webp";
import weddingStage from "@/assets/wedding/wedding_stage.webp";
import titleCinematic from "@/assets/wedding/title_cinematic.webp";
import ceremonyGowriPooja from "@/assets/wedding/ceremony_gowri_pooja.webp";
import ceremonyJilakarraBellam from "@/assets/wedding/ceremony_jilakarra_bellam.webp";
import ceremonyMangalyaDharanam from "@/assets/wedding/ceremony_mangalya_dharanam.webp";
import ceremonySaptapadi from "@/assets/wedding/ceremony_saptapadi.webp";
import ceremonyVaramala from "@/assets/wedding/ceremony_varamala.webp";
import ceremonyTalambralu from "@/assets/wedding/ceremony_talambralu.webp";
import ceremonyKanyadaanam from "@/assets/wedding/ceremony_kanyadaanam.webp";

export const assets = {
  bananaLeaf1,
  bananaLeaf2,
  bananaLeaf3,
  bananaTree,
  mangoBunch,
  garlandLong,
  garlandShort,
  foliageBranch,
  pinkBud,
  kalash,
  bottomFoliage,
  marigoldOrange,
  marigoldYellow,
  flowerPink,
  petal,
  templeWatermark,
  templeMain,
  coupleVarmala,
  brideGreeting,
  girlPraying,
  coupleGreeting,
  elephantCouple,
  ganesha,
  weddingStage,
  titleCinematic,
};

export const ceremonies = [
  { id: "gowri-pooja", en: "Gowri Pooja", te: "గౌరీ పూజ", img: ceremonyGowriPooja },
  { id: "jilakarra-bellam", en: "Jilakarra Bellam", te: "జీలకర్ర బెల్లం", img: ceremonyJilakarraBellam },
  { id: "mangalya-dharanam", en: "Mangalya Dharanam", te: "మాంగల్యధారణ", img: ceremonyMangalyaDharanam },
  { id: "saptapadi", en: "Saptapadi", te: "సప్తపది", img: ceremonySaptapadi },
  { id: "varamala", en: "Varamala", te: "వరమాల", img: ceremonyVaramala },
  { id: "talambralu", en: "Talambralu", te: "తలంబ్రాలు", img: ceremonyTalambralu },
  { id: "kanyadaanam", en: "Kanyadaanam", te: "కన్యాదానం", img: ceremonyKanyadaanam },
];

export const wedding = {
  greetingTelugu: "శ్రీ విఘ్నేశ్వరాయ నమః",
  blessingsTelugu: "శ్రీరస్తు శుభమస్తు కళ్యాణమస్తు",
  heading: "Vavilapalli Family's Wedding Invitation",
  groom: {
    name: "Chi. Gireesh",
    shortName: "Gireesh",
    father: "Sri Vavilapalli Applaswami Naidu",
    mother: "Smt. Chinnammadu",
  },
  bride: {
    name: "Chi. Sou. Varsha",
    shortName: "Varsha",
    father: "Sri Pogiri Laxmana Naidu",
    mother: "Smt. Usha Rani",
  },
  dateLong: "Wednesday, 16 December 2026",
  dateBoxes: [
    { value: "16", label: "DATE" },
    { value: "12", label: "MONTH" },
    { value: "26", label: "YEAR" },
  ],
  muhurtham: "8:03 AM",
  nakshatra: "Shatabhisha Nakshatra",
  lagnam: "Dhanur Lagnam",
  venue: {
    title: "VENUE",
    line1: "At Our Residence",
    line2: "Komiri Village,",
    line3: "Vizianagaram District,",
    line4: "Andhra Pradesh.",
  },
  lunch: {
    title: "LUNCH INVITATION",
    date: "16 December 2026",
    time: "12:00 Noon Onwards",
    at: "At the Wedding Venue.",
  },
  /** Muhurtham instant in IST (UTC+5:30), used by the live countdown. */
  muhurthamISO: "2026-12-16T08:03:00+05:30",
  /** Google Maps destination query — address based, no invented coordinates. */
  mapsQuery: "Komiri Village, Vizianagaram District, Andhra Pradesh",
  /**
   * Background music track URL. No licensed track has been supplied yet, so
   * the music control stays hidden until one is added here.
   */
  audioUrl: undefined as string | undefined,
};
