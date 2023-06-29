AFRAME.registerComponent("box",{
    
    init: function(){
        this.createbox()
    },
    createbox: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key==='z') {
                var camera = document.querySelector("#camera")
                var pos = camera.getAttribute("position")
                var box = document.createElement("a-box")
                box.setAttribute("id","box1")
                box.setAttribute("material",{
                    height:100,
                    width:100,
                    depth:100
                })
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
            if (e.key==='1') {
                var camera = document.querySelector("#camera")
                var pos = camera.getAttribute("position")
                var box = document.createElement("a-box")
                box.setAttribute("id","box1")
                box.setAttribute("material",{
                    height:100,
                    width:100,
                    depth:100
                })
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