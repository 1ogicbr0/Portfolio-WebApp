import styles from './Particles.module.css';
import Particles from "react-particles";
import {loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
      }, []);
      const options =  {
        fullScreen:false,

        interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0A66C2",
            },
            links: {
              color: "#639cd9",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 7,
            },
            life: {
                duration: {
                  sync: true,
                  value: 1000,
                },
                count: 1,
              }
          },
        };
      
    return<>
        <div ><Particles className={styles.particles}  options={options} init={particlesInit} /></div>
    </>
}

export default ParticlesComponent;