/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./src/aim/Aim.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Aim = void 0;
console.log("aim entrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
class Aim {
    constructor() {
    }
    init() {
        console.log("aim init");
        document.body.style.backgroundColor = "white";
        const RADIUS = 20;
        function degToRad(degrees) {
            var result = Math.PI / 180 * degrees;
            return result;
        }
        // setup of the canvas
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        var x = 50;
        var y = 50;
        function canvasDraw() {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#f00";
            ctx.beginPath();
            ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
            ctx.fill();
        }
        canvasDraw();
        // pointer lock object forking for cross browser
        canvas.requestPointerLock = canvas.requestPointerLock;
        document.exitPointerLock = document.exitPointerLock;
        canvas.onclick = function () {
            canvas.requestPointerLock();
        };
        // pointer lock event listeners
        // Hook pointer lock state change events for different browsers
        document.addEventListener('pointerlockchange', lockChangeAlert, false);
        document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
        function lockChangeAlert() {
            if (document.pointerLockElement === canvas) {
                console.log('The pointer lock status is now locked');
                document.addEventListener("mousemove", updatePosition, false);
            }
            else {
                console.log('The pointer lock status is now unlocked');
                document.removeEventListener("mousemove", updatePosition, false);
            }
        }
        var tracker = document.getElementById('tracker');
        var animation;
        function updatePosition(e) {
            x += e.movementX;
            y += e.movementY;
            if (x > canvas.width + RADIUS) {
                x = -RADIUS;
            }
            if (y > canvas.height + RADIUS) {
                y = -RADIUS;
            }
            if (x < -RADIUS) {
                x = canvas.width + RADIUS;
            }
            if (y < -RADIUS) {
                y = canvas.height + RADIUS;
            }
            tracker.textContent = "X position: " + x + ", Y position: " + y;
            if (!animation) {
                animation = requestAnimationFrame(function () {
                    animation = null;
                    canvasDraw();
                });
            }
        }
    }
}
exports.Aim = Aim;
const aim = new Aim();
aim.init();

})();

/******/ })()
;
//# sourceMappingURL=aimEntry.57ee6ef5.map