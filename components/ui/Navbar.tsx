import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <NextLink href="/" passHref>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icon"
            width={70}
            height={70}
          />
          <Text color="white" h2 css={{ margin: 0 }}>
            P
          </Text>
          <Text color="white" h3 css={{ margin: 0 }}>
            ókemon
          </Text>
          <Spacer css={{ flex: 1 }} />
        </div>
      </NextLink>
      <NextLink href="/favorites" passHref>
        <div>
          <Text color="white">Favoritos</Text>
        </div>
      </NextLink>
    </div>
  );
};
// "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
