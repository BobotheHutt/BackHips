// Central Mobility Hub Exercise Database
const MobilityDatabase = {
    // ==========================================
    // HIP GARAGE EXERCISE WAREHOUSE (12 ROUTINES)
    // ==========================================
    hip: {
        // Groin & Internal Socket Track
        legSwings: {
            title: "Standing Unweighted Leg Swings",
            badge: "Unloaded Fluid Pumper / 20 Swings Per Side",
            desc: "Stand tall on a step using one leg, letting the target leg hang free. Hold a rail for balance. Slowly swing the free leg forward and backward like a pendulum. This unweighted motion coaxes the joint to pump protective lubrication fluid into the socket without grinding.",
            ytId: "X_xJscX85zM"
        },
        gluteBridges: {
            title: "Isometric Glute Bridges",
            badge: "Progressive Glute Track / 10 Reps / 5s Hold",
            desc: "Lie flat on your back with knees bent and feet flat. Drive down through your heels to raise your hips until your thighs run inline with your trunk. Squeezing your glutes flat tells the deep, overworking hip flexors on the front to turn off and let go.",
            ytId: "6g_W_8N_nco"
        },
        quadStretch: {
            title: "Standing Quad & Hip Flexor Lengthener",
            badge: "Front Chain Decompression / 3 Sets / 30s Hold",
            desc: "Stand upright holding a stable wall. Bend your target knee backward and hold your ankle. Keep your knees squeezed close together and gently push your pelvis forward until you feel a clean stretch down the front of the thigh. Releases excessive downward pull on the socket.",
            ytId: "X6wT-f0eBq0"
        },

        // Tightness & Stiffness Track
        hipRotations: {
            title: "Seated Windshield Wiper Mobility Drill",
            badge: "Capsular Lubricator / 15 Fluid Reps",
            desc: "Sit on the edge of a firm bench or chair with feet wide apart on the floor. Slowly rotate one knee inward toward the center line, then return, alternating sides. This opens up the rotational boundaries of the internal capsule shroud.",
            ytId: "n4m3R_UfG_w"
        },
        psoasMarch: {
            title: "Supine Isometric Psoas March",
            badge: "Stability Lock / 10 Alternating Reps",
            desc: "Lie flat on your back. Loop a light resistance band around your feet (optional). Bring one knee up toward your chest while keeping the other leg completely locked out straight on the floor. Alternating under control stabilizes the deep hip flexor tracks.",
            ytId: "O9-D_5_N_vE"
        },
        frogStretch: {
            title: "Controlled Rocking Frog Stretch",
            badge: "Inner Chain Opener / 8 Slow Rocking Reps",
            desc: "Get down on your hands and knees, then spread your knees as wide apart as comfortable while keeping your feet flat behind you. Slowly rock your hips backward toward your heels until you feel a pull in the inner thighs, then return forward to reset the joint width.",
            ytId: "0bLh4gXw9-M"
        },

        // Outer Hip Track
        pillowBlock: {
            title: "Side-Lying Pelvic Alignment Block",
            badge: "Tendon Decompression / Night Routine Modification",
            desc: "When resting on your side in bed, position a firm, thick pillow securely between your knees and shins. This structural block stops your top leg from crossing over your body line, preventing the outer tendons from getting tightly stretched and rubbed across the side hip bone all night.",
            ytId: "2v_W_XfG_n4"
        },
        clamshells: {
            title: "Side-Lying Controlled Clamshells",
            badge: "Lateral Tracking Fix / 15 Reps Per Side",
            desc: "Lie on your side with hips stacked and knees bent at 90 degrees. Keeping your feet pinned together, slowly raise your top knee upward without letting your pelvis roll backward. Strengthens the lateral stability wall to prevent outer tendon rubbing.",
            ytId: "4Z8_f4X_n6E"
        },
        itBandRoll: {
            title: "Outer Thigh Soft Tissue Roll",
            badge: "Tendon Maintenance / 90 Seconds Slow Passes",
            desc: "Rest the outer side of your thigh right onto a foam roller tube, supporting your weight with your arms. Roll slowly from just below the hip bone down to just above the knee. Pause on highly sensitive spots to encourage protective muscle knots to release.",
            ytId: "7W-N_n-8G60"
        },

        // Buttock & Rear Pocket Track
        figure4: {
            title: "Seated Figure-4 Release",
            badge: "Deep Pocket Guarding Release / 3 Sets / 30s Hold",
            desc: "Sit upright on a flat, solid chair. Cross your ankle over your opposite knee line. Keeping your low back flat and chin up, pivot your upper body forward from your hip hinges until you feel a pull across your rear pocket. Hold steadily to let the tight strands unpack.",
            ytId: "3N3_R8X_p4g"
        },
        piriformisGun: {
            title: "Percussion Maintenance on Rear Rotators",
            badge: "Soft Tissue Reset / 2 Minutes Per Side",
            desc: "Float a massage gun head gently along the thick, fleshy muscle sheets in the center of your back pocket. Let the vibration work to break up deep guarding knots caused by prolonged sitting. Do not hit hard bone.",
            ytId: "Z4m3_X_G78o"
        },
        gluteStretch: {
            title: "Supine Knee-to-Opposite-Shoulder Stretch",
            badge: "Posterior Chain Extension / 3 Sets / 30s Hold",
            desc: "Lie flat on your back. Pull your target knee up toward your chest, then gently use your hands to guide that knee diagonally across your body toward your opposite shoulder. Lengthens the deep, compressed rear rotator sheets safely.",
            ytId: "b4m_X_N_vEg"
        }
    },

    // ==========================================
    // BACK GARAGE EXERCISE WAREHOUSE (12 ROUTINES)
    // ==========================================
    back: {
        catCow: {
            title: "Controlled Cat-Cow Mobility Drill",
            badge: "Unloaded Fluid Pumper / 10 Fluid Movements",
            desc: "Get on your hands and knees. Slowly let your stomach sink down toward the floor while looking up slightly. Then, gently round your spine up toward the ceiling like an arching cat while tucking your chin. Pumps fluid through the spinal column discs.",
            ytId: "7_X_W_8N_v4"
        },
        cobraPress: {
            title: "Prone Cobra Press-Ups",
            badge: "Disc Decompression / 10 Slow Reps",
            desc: "Lie face down on the floor with hands flat under your shoulders. Keeping your hips pinned hard against the floor, slowly push through your arms to lift your chest upward. This extension vector unloads compression off the back of the lumbar discs.",
            ytId: "H7482_fRscw"
        },
        nerveFloss: {
            title: "Seated Sciatic Nerve Flossing Drill",
            badge: "Neural Pathway Flosser / 15 Controlled Reps",
            desc: "Sit upright on a tall chair, letting your legs dangle. Look up toward the ceiling while simultaneously extending one knee straight out and pointing your toes up. Then, bend the knee back down while tucking your chin. Slides the nerve smoothly through tight channels.",
            ytId: "n-2U-bbyBvs"
        },
        posteriorTilt: {
            title: "Supine Pelvic Tilt Flattening Drill",
            badge: "Stability Lock / 12 Controlled Reps",
            desc: "Lie on your back with knees bent. Tighten your stomach muscles and squeeze your butt to rotate your pelvis backward, forcing your lower back to flatten completely into the floor. Holds the spine out of an over-arched posture.",
            ytId: "0h6C6g5m3u8"
        },
        psoasRelease: {
            title: "Kneeling Hip Flexor Reset",
            badge: "Front Chain Decompression / 3 Sets / 30s Hold",
            desc: "Get into a half-kneeling posture (one knee down, one foot forward). Tuck your tailbone under to flatten your low back, then gently lean forward into your front leg until you feel a clean pull down the front of the back thigh. Stops tight front lines from arching your spine.",
            ytId: "Zf_CAnv_xlo"
        },
        childsPose: {
            title: "Spinal Decompression Childs Pose",
            badge: "Posterior Chain Extension / 2 Minutes Hold",
            desc: "On hands and knees, sink your hips all the way back onto your heels while reaching your arms straight out ahead on the floor. Drop your chest down low. This widens the bone blocks on the back of the column, instantly opening up crowded spaces.",
            ytId: "bswH6vTrcS4"
        },
        lumbarRotation: {
            title: "Supine Segmental Lumbar Rotations",
            badge: "Capsular Lubricator / 10 Slow Rocks Per Side",
            desc: "Lie on your back with knees bent and feet flat. Keeping your shoulders pinned flat to the floor, slowly lower both knees down to the right side as far as comfortable, then rock them over to the left side. Restores rotational lubrication parameters smoothly.",
            ytId: "XunT_X-pG4E"
        },
        quadrupedRock: {
            title: "Quadruped Rocking Mobility Drill",
            badge: "Unloaded Fluid Pumper / 15 Controlled Reps",
            desc: "On hands and knees, maintain a flat, solid neutral back. Slowly shift your weight backward, pushing your tailbone toward your heels while keeping your spine perfectly rigid, then return to base. Lubricates the load joints without bending the vertebrae.",
            ytId: "S38pE3gK82g"
        },
        foamSpine: {
            title: "Thoracic Spine Foam Roller Extension",
            badge: "Tendon Maintenance / 10 Slow Passes",
            desc: "Place a foam roller under your upper/mid back, cross your arms over your chest, and lift your hips. Roll slowly from the base of your neck down to the bottom of your ribcage. Do not roll your lower back area. Restores extension mobility above the lumbar column.",
            ytId: "8Vz9Zas_t_A"
        },
        birdDog: {
            title: "Contralateral Bird-Dog Stability Brace",
            badge: "Stability Lock / 12 Alternating Reps",
            desc: "On hands and knees, brace your midsection tightly. Slowly raise your right arm straight ahead while pushing your left leg straight back behind you. Hold for 2 seconds, maintaining a level back like a table, then drop down and switch sides. Builds a protective wall around nerve pathways.",
            ytId: "Je94XGzL_lE"
        },
        deadBug: {
            title: "Supine Anti-Extension Dead-Bug Drill",
            badge: "Stability Lock / 10 Alternating Reps",
            desc: "Lie on your back with arms reaching up and knees bent at 90 degrees. Flatten your low back completely into the floor. Slowly lower your right arm behind your head while extending your left leg straight out, keeping your lower back locked onto the floor. Alternating under control shields the nerves.",
            ytId: "wXW0KxXg5vU"
        },
        plankBrace: {
            title: "Elevated Incline Forearm Plank",
            badge: "Stability Lock / 3 Sets / 20s Hold",
            desc: "Place your forearms flat on a sturdy workbench or chair base. Step your feet back until your body forms a straight line from head to heels. Brace your core like you're preparing for a punch. This isometric tension locks the spinal column into a secure alignment.",
            ytId: "vVkaBf9ZqfA"
        }
    }
};
