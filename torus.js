AFRAME.registerComponent("torus",{
    
    init: function(){
        this.createbox()
    },
    createbox: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key==='g') {
                var camera = document.querySelector("#camera")
                var pos = camera.getAttribute("position")
                var box = document.createElement("a-torus")
                box.setAttribute("id","box1")
                box.setAttribute("radius",10)
                box.setAttribute("radius-tubular",0.1)
                box.setAttribute("color","blue")
                box.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                box.setAttribute("static-body", {
                    mass: "0"
                  });
                box.setAttribute("visible", true)
                var scene = document.querySelector("#scene")
                scene.appendChild(box)
                  
            }
            if (e.key==='2') {
                var camera = document.querySelector("#camera")
                var pos = camera.getAttribute("position")
                var box = document.createElement("a-torus")
                box.setAttribute("id","box1")
                box.setAttribute("radius",10)
                box.setAttribute("radius-tubular",0.1)
                box.setAttribute("color","red")
                box.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                box.setAttribute("static-body", {
                    mass: "0"
                  });
                box.setAttribute("visible", true)
                var scene = document.querySelector("#scene")
                scene.appendChild(box)
                  
            }
            
        })
    }
})