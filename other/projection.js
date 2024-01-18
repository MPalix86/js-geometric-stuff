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

// /**
//  * we want to calculate the projected coordinates (x1,y1,z1) on the plane,
//  * starting from the point (x,y,z) in the space.
//  *
//  * first thing we need to do is calculating the vector that goes to the center of the camera (cx0,cy0,cz0)
//  * to the point (x,y,z) we can do this by doing :
//  * 1)
//  *                x = x-cx
//  *                y = y-ct
//  *                z = z-cz
//  *
//  * and then normalize the vector (make the vector of lengh = 1 ), because we are intrested in the direction.
//  * in order to do this we simply need to do :
//  * 2)
//  *                    (x,y,z)
//  *     --------------------------------------
//  *     sqrt( (x-cx)^2 + (y-cy)^2 + (z-cz)^2 ) -- ( distance formula in the space)
//  *
//  * so we have the normlyzed vector of coordinates (nx,ny,nz)
//  *
//  * then to get the projection on the plane we just multiply the
//  * normalyzed vector times plan-camera distance !
//  * 3)
//  *               x1 = x - (planCameraDistance * nx)
//  *               y1 = y - (planCameraDistance * ny)
//  *               z1 = z - (planCameraDistance * nz)
//  */
const getProjectionPoints = function (points) {
  const projections = [];
  for (const point of points) {
    const [x, y, z] = point;
    // calculating distance between (x,y,z) and (cx0,cy0,cz0)
    const d_x_cx0 = Math.pow(x - cx0, 2);
    const d_y_cy0 = Math.pow(y - cy0, 2);
    const d_z_cz0 = Math.pow(z - cz0, 2);
    const pointCameraDistance = Math.sqrt(d_x_cx0 + d_y_cy0 + d_z_cz0);
    // normalyzing the vector
    const [nx, ny, nz] = [
      (x - cx0) / pointCameraDistance,
      (y - cy0) / pointCameraDistance,
      (z - cz0) / pointCameraDistance,
    ];
    const x1 = x - planCameraDistance * nx;
    const y1 = y - planCameraDistance * ny;
    // const z1 = z - (planCameraDistance * nz)  // we dont need to calculate z1
    projections.push([x1, y1]);
  }
  return projections;
};
