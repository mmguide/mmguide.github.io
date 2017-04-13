//1
// AFRAME.registerComponent('hello-world', {
//  init: function () {
//    console.log('Hello, World!');
//  }
//});


//2
// AFRAME.registerComponent('hello-world', {
//  init: function () {
//    console.log('Hello, World!');
//    document.querySelector('a-scene').setAttribute('hello-world', '');
//  }
//     
//});

//3)
//AFRAME.registerComponent('log', {
//  schema: {
//    message: {type: 'string', default: 'Hello, World!'}
//  },
//  init: function () {
//    console.log(this.data.message);
//  }
//});


//4
//AFRAME.registerComponent('log', {
//  schema: {
//    event: {type: 'string', default: ''},
//    message: {type: 'string', default: 'Hello, World!'}
//  },
//  init: function () {
//    var self = this;
//    this.eventHandlerFn = function () { console.log(self.data.message); };
//  },
//  update: function (oldData) {
//    var data = this.data;
//    var el = this.el;
//    // `event` updated. Remove the previous event listener if it exists.
//    if (oldData.event && data.event !== oldData.event) {
//      el.removeEventListener(oldData.event, this.eventHandlerFn);
//    }
//    if (data.event) {
//      el.addEventListener(data.event, this.eventHandlerFn);
//    } else {
//      console.log(data.message);
//    }
//  }
//});


//5
AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
    color: {type: 'color', default: '#AAA'},
    position: {type: 'number',default: 0 0 -2}
  },
  /**
   * Initial creation and setting of the mesh.
   */
  init: function () {
    var data = this.data;
    var el = this.el;
    // Create geometry.
    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
      
    this.geometry = new THREE.BoxBufferGeometry(data.position);
    // Create material.
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    // Create mesh.
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // Set mesh on entity.
    el.setObject3D('mesh', this.mesh);
  }
});