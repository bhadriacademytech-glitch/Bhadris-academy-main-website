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
  heroVideo: 'https://res.cloudinary.com/pcgf67hy/video/upload/v1785495037/BA_Website_VT_lru16g.mov',
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
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1785495396/IMG_2252_mkoqfx.jpg', label: 'Classroom Sessions', cls: 'gitem--w' },
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1785495384/IMG_2251_tlhmy2.jpg', label: 'Young Learners', cls: 'gitem--t' },
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1785495383/IMG_2326_zhsmgn.jpg', label: 'Board Prep', cls: '' },
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1785495384/IMG_2327_okwxl6.jpg', label: 'Group Study', cls: '' },
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1786525400/IMG_2741_ad5xnu.jpg', label: 'Our Faculty', cls: '' },
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1786525004/IMG_2328_f9azv1.jpg', label: 'Study Material', cls: '' },
  { img: 'https://res.cloudinary.com/pcgf67hy/image/upload/v1786525009/IMG_2719_e3ftgh.jpg', label: 'Achievers', cls: 'gitem--w' },
]

export const waLink = (text) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`
