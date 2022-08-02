import { Box, Center, Heading, Switch } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Show } from "./Show";

export const Demo = () => {
    const [isShown, setIsShown] = useState(false);
    const obj = isShown ? { text: "children" } : undefined;

    return (
        <Center flexDirection="column" h="100%">
            <motion.div animate={{ rotateX: 360 }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Box textAlign="center" fontSize="50px">
                    Ready to go
                </Box>
            </motion.div>
            <Heading>{isShown ? "Shown" : "Hidden"}</Heading>
            <Switch onChange={() => setIsShown((current) => !current)} />
            <Show when={isShown} fallback="fallback">
                {() => obj.text}
            </Show>
        </Center>
    );
};
