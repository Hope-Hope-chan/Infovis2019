function main()
{

    var width = 500;
    var height = 500;
    
    var scene = new THREE.Scene();
    
    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var light = new THREE.PointLight(0xffffff);
    light.position.set(1,1,1);
    scene.add(light);

    
    var vertices = [
	[0,0,0], // v0
	[1,0,0], // v1
	[1,1,0], // v2
	[0,1,0], // v3
	[1,0,1], // v4
	[0,0,1], // v5
	[0,1,1], // v6
	[1,1,1], // v7
    ];
    
    var faces = [
	[0,1,2,3,4,5,6,7], // f0: v0-v1-v2	
    ];
    
    
    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    
    var id = faces[0];
    
    var f0 = new THREE.Face3( id[0], id[1], id[2] );
    var f1 = new THREE.Face3( id[0], id[2], id[3] );
    var f2 = new THREE.Face3( id[0], id[1], id[4] );
    var f3 = new THREE.Face3( id[0], id[4], id[5] );
    var f4 = new THREE.Face3( id[0], id[5], id[6] );
    var f5 = new THREE.Face3( id[0], id[3], id[6] );
    var f6 = new THREE.Face3( id[1], id[2], id[7] );
    var f7 = new THREE.Face3( id[1], id[4], id[7] );
    var f8 = new THREE.Face3( id[3], id[6], id[7] );
    var f9 = new THREE.Face3( id[2], id[3], id[7] );
    var f10 = new THREE.Face3( id[4], id[5], id[7] );
    var f11 = new THREE.Face3( id[5], id[6], id[7] );
    var f12 = new THREE.Face3( id[6], id[4], id[7] );
    
    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );
    geometry.faces.push( f0 );
    geometry.faces.push( f1 );
    geometry.faces.push( f2 );
    geometry.faces.push( f3 );
    geometry.faces.push( f4 );
    geometry.faces.push( f5 );
    geometry.faces.push( f6 );
    geometry.faces.push( f7 );
    geometry.faces.push( f8 );
    geometry.faces.push( f9 );
    geometry.faces.push( f10 );
    geometry.faces.push( f11 );
    geometry.faces.push( f12 );
    
    
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 0, 1 );//n
    geometry.faces[1].color = new THREE.Color( 0, 1, 1 );//y
    geometry.faces[2].color = new THREE.Color( 1, 1, 0);//y
    geometry.faces[3].color = new THREE.Color( 1, 0, 1);//y
    geometry.faces[4].color = new THREE.Color( 0, 0, 1 );//n
    geometry.faces[5].color = new THREE.Color( 1, 1, 0 );//y
    geometry.faces[6].color = new THREE.Color( 0, 1, 0 );//y
    geometry.faces[7].color = new THREE.Color( 1, 0, 1 );//y
    geometry.faces[8].color = new THREE.Color( 0, 0, 1 );//y
    geometry.faces[9].color = new THREE.Color( 1, 1, 0 );//y
    geometry.faces[10].color = new THREE.Color( 1, 0, 1 );//y
    geometry.faces[11].color = new THREE.Color( 1, 1, 0 );//y
    
    
    var cube = new THREE.Mesh(geometry,material);
    scene.add(cube);

    
  

	
  
    
    
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.05;
        renderer.render( scene, camera );
    }
}
