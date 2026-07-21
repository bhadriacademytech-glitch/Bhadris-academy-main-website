/* ------------------------------------------------------------------
   SITE CONFIG — edit everything in one place
   ------------------------------------------------------------------ */
export const SITE = {
  name: "Bhadri's Academy",
  tagline: 'Bengaluru',
  whatsappNumber: '919632645625', // country code + number, no "+"
  phoneDisplay: '+91 96326 45625',
  email: 'hello@bhadrisacademy.in',
  address: [
    "Bhadri's Academy,",
    'Bengaluru, Karnataka, India',
  ],
  // Replace with your own hero video: put a file at /public/hero.mp4
  // and change this to '/hero.mp4'
  heroVideo: 'https://res.cloudinary.com/pcgf67hy/video/upload/v1784612582/Cinematic_educational_institut_lzbhkq.mp4',
}

/* Vertical (9:16) videos — founder / academy reels.
   Put files in /public (e.g. /reel-1.mp4) and set src.
   While src is empty the poster image + play badge is shown. */
export const FOUNDER_REELS = [
  { src: '', poster: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=70', tag: 'Inside Our Classrooms' },
  { src: '', poster: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=70', tag: 'How We Teach' },
  { src: '', poster: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=70', tag: 'A Word from the Founder' },
]

/* Vertical (9:16) parent feedback videos */
export const PARENT_REELS = [
  { src: '/Video-140.mp4', poster: '', tag: 'Parent of Student' },
  { src: '/Video-101.mp4', poster: '', tag: 'Parent of Student' },
  { src: '/Video-578.mp4', poster: '', tag: 'Parent of Student' },
]


export const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70', label: 'Classroom Sessions', cls: 'gitem--w' },
  { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=70', label: 'Young Learners', cls: 'gitem--t' },
  { img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=70', label: 'Board Prep', cls: '' },
  { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=70', label: 'Group Study', cls: '' },
  { img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=70', label: 'Our Faculty', cls: '' },
  { img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=70', label: 'Study Material', cls: '' },
  { img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=70', label: 'Achievers', cls: 'gitem--w' },
]

export const waLink = (text) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`
