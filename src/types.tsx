/**
 * Reponsiveness interface
 *
 * @typedef Responsiveness
 * @property {number} mobile - The gap for mobile devices
 * @property {number} tablet - The gap for tablet devices
 * @property {number} desktop - The gap for desktop devices
 * @property {number} widescreen - The gap for widescreen devices
 * @property {number} fullhd - The gap for fullhd devices
 *
 */
export interface Responsiveness {
	mobile?: number;
	tablet?: number;
	desktop?: number;
	widescreen?: number;
	fullhd?: number;
}
