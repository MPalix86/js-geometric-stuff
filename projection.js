/**
 *
 *            X
 *           /
 *          /
 *         /
 *        /
 *       /
 *      /
 *     /
 *   O/_________________________________________  Z
 *   |
 *   |
 *   |                                     /|
 *   |                                    / |
 *   |           F_________B             /  |
 *   |           /|       /|            /   |
 *   |         E/_|______/A|           /    | viewing direction (vd)
 *   |          | |      | |           |  ------------------------------ *| CAMERA
 *   |          |G|______|_|C          |   /                           (cx0,cy0,cz0)
 *   |          | /      | /           |  /
 *   |          |/_______|/            | /
 *   |          H        D             |/
 *   |
 *   |
 *   |
 *   Y
 */

/**
 * The camera is supposed to be aligned with the XY plane,
 * so the distance of the camera corresponds to the depth along the Z-axis.
 */
const cameraDistance = -400;

/**
 * for the same reason above x and y coordinates of the center of the camera are the same
 * of the center of the cube (watch the drawings above)
 */
const [cx0, cy0, cz0] = [x0, y0, z0 + cameraDistance]; // camera center

/**
 * the plan is orthogonal to the viewing direction of the camera.
 * so the distance of the plane corresponds to the depth along the Z-axis.
 */
const planDistance = -200;

/**
 * As you can see in the image above, the line labeled "viewing direction" is orthogonal
 * to the plane at the point that shares the same x and y coordinates as the camera but
 * has a different z coordinate.
 * so to calculate the distance (focal lenght) just subtract the z
 */
const planCameraDistance = Math.abs(cameraDistance - planDistance);
