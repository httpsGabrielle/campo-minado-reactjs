import palette from "./palette";

// ----------------------------------------------------------------

export function remToPx(value) {
	return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
	return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
	return {
		"@media (min-width:0px)": {
			fontSize: pxToRem(sm),
		},
		"@media (min-width:900px)": {
			fontSize: pxToRem(md),
		},
		"@media (min-width:1200px)": {
			fontSize: pxToRem(lg),
		},
	};
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Poppins, sans-serif";

const FONT_SECONDARY = "Inter, sans-serif";

const typography = {
	fontFamily: FONT_SECONDARY,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 600,
	h1: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 700,
		lineHeight: 80 / 64,
		fontSize: pxToRem(24),
	},
	h2: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 600,
		fontSize: pxToRem(20),
	},
	h3: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
	},
	h4: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 500,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
	},
	h5: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 500,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
	},
	h6: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
	},
	subtitle: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 400,
		color: palette.grey[600],
		fontSize: pxToRem(14),
	},
	body2: {
		fontFamily: FONT_SECONDARY,
		fontWeight: 500,
		fontSize: pxToRem(14),
	},
	menu: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 600,
		color: palette.grey[600],
		fontSize: pxToRem(12),
	},
	button: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 500,
		lineHeight: 1.7,
		fontSize: pxToRem(14),
		textTransform: "none",
	},
};

export default typography;
