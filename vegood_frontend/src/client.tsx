import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'kp687fgq',
    dataset: 'posts',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: 'skIARXPfyUotZTnwB2gkL2h1e2Il35e1rQeRg145aEV6LBokgFDHzi3xJ472Rsu7wujwCbzPDzjwjYZ9NXkgEooJHYPjDVnubd8MtyiRTEjytcLCVGsmVTcNuLzHe0iKOLfxQAGHRR013EWA3vFPNbb70CcIWhkaHRyFlm3sFYhfC179LgvS',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);