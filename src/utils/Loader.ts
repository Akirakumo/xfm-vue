import type THREE from "three";
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js';
import scene from './Scene';
import camera from './Camera';

export const helper = new MMDAnimationHelper();

export class Loader {
    loadModels() {
        const loader = new MMDLoader();

        loader.loadWithAnimation(
            '../../public/mods/Pardofelis/Pardofelis.pmx',
            '../../public/move/happycat/dance.vmd',
            function onLoad(mmd) {
                // called when the resource is loaded
                const { mesh } = mmd;
                helper.add(mmd.mesh, {
                    animation: mmd.animation,
                });

                scene.getScene().add(mmd.mesh);
            }
        );

        loader.loadAnimation(
            '../../public/move/happycat/camera.vmd',
            camera.getCamera(),
            function (cameraAnimation) {
                helper.add(camera.getCamera(), {
                    animation: cameraAnimation as THREE.AnimationClip,
                });
            }
        );
    }
}

export default new Loader();