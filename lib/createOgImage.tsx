export const createOgImage = ({
  title,
  meta,
}: {
  title: string;
  meta: string;
}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/dm80dmmze/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Oxygen_72_bold:${e(title)},co_rgb:ffffff,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // META
    `l_text:Oxygen_48:${e(meta)},co_rgb:ffffff,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // BG
    `background_base.png`,
  ].join("/");

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
