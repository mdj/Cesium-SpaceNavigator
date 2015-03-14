//Purpose: calculate shared resources once per frame for greater efficiency
function initCommon()
{
}
function runCommon(clock)
{
	//var icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(clock);
	GD_transform = Cesium.Transforms.eastNorthUpToFixedFrame(viewer.scene.camera.position, viewer.scene.globe.ellipsoid, new Cesium.Matrix4());
	GD_rotmat = Cesium.Matrix4.getRotation(GD_transform,new Cesium.Matrix3());
	moonPosition = getAsteroidPosition(clock,"Moon");
	sunPosition = getAsteroidPosition(clock,"Sun");
}