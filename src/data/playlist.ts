// ===== Music Player — Playlist Configuration =====
// Add your songs here. Place MP3 files in public/music/
// and cover images in public/images/covers/

export interface Song {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

export interface LyricLine {
  time: number;
  ja: string;   // Primary lyric line
  zh: string;   // Secondary / translation line (optional)
}

// Instrumental tracks (played first in sequential mode)
export const instrumental: Song[] = [
  // Example:
  // { name: 'Ambient Track', artist: 'Demo Artist', url: '/music/demo.mp3', cover: '/images/covers/cover-1.webp' },
];

// Vocal tracks
export const vocal: Song[] = [
  // Example:
  // { name: 'My Song', artist: 'Singer Name', url: '/music/my-song.mp3', cover: '/images/covers/cover-2.webp' },
];

// Lyrics keyed by song name (must match the `name` field above)
// Only songs listed here will show lyrics in the player
export const lyrics: Record<string, LyricLine[]> = {
  // Example:
  // 'My Song': [
  //   { time: 0.0, ja: '(Intro)', zh: '' },
  //   { time: 15.0, ja: 'First line of lyrics', zh: 'Translation here' },
  //   { time: 20.0, ja: 'Second line', zh: 'Another translation' },
  // ],
};
