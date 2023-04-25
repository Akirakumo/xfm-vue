<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import * as THREE from 'three'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js'
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js'
const threeDom = ref<HTMLElement>();


onMounted(() => {
    if (threeDom) {
        const scene = new THREE.Scene()
        // scene.background = new THREE.Color(0xffffff)
        // const clock = new THREE.Clock()

        const camera = new THREE.PerspectiveCamera(
            75,
            threeDom.value?.clientWidth / threeDom.value?.clientHeight,
            0.1,
            1000
        )
        camera.position.set(0, 0, 100)

        scene.add(camera)

        // const cubeSize = new THREE.BoxGeometry(1, 1, 1)
        // const cubeColor = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        // const cube = new THREE.Mesh(cubeSize, cubeColor)
        // scene.add(cube)

        const loader = new MMDLoader()
        const helper = new MMDAnimationHelper()
        const loadMMD = (mmd) => {
            const { mesh, animation } = mmd;
            helper.add(mesh, {
                animation,
            });
            scene.add(mesh);
        }
        const onError = (err) => {
            console.log(err);

        }
        const loadCamera = (cameraAnimation) => {
            helper.add(camera, {
                animation: cameraAnimation as THREE.AnimationClip,
            });
        }

        loader.loadWithAnimation(
            '../src/assets/mods/Pardofelis_Q/帕朵菲莉丝.pmx',
            '../src/assets/move/happycat/dance.vmd',
            loadMMD,
            function () { },
            onError
        );

        // loader.loadAnimation(
        //     '../src/assets/move/happycat/camera.vmd',
        //     camera,
        //     loadCamera
        // );



        const clock = new THREE.Clock()

        const renderer = new THREE.WebGLRenderer()
        // renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(threeDom.value?.clientWidth, threeDom.value?.clientHeight)
        // renderer.shadowMap.enabled = true;
        helper.update(clock.getDelta());

        threeDom.value.appendChild(renderer.domElement)
        renderer.render(scene, camera)

    }

})


</script>

<template>
    <div ref="threeDom" class="three-box"></div>
</template>

<style lang="less" scoped>
.three-box {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
</style>