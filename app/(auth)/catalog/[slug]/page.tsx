import View from "./view";

interface CatalogProps {
  params: {
    slug: string;
  };
}

export type TProduct = {
  description: string;
  img: string;
  title: string;
};

type TProductList = { [key: string]: TProduct[] };

const products: TProductList = {
  shoes: [
    {
      title: "Yeezy Boost 350 V2 Static",
      img: "https://static.tildacdn.com/stor3135-6439-4433-b230-666430313162/48885485.png",
      description: `The main detail that immediately catches the eye is the cut-out Primeknit stripe on the outer side where "SPLY-350" used to be written.`,
    },
    {
      title: "Yeezy 450 Cloud White",
      img: "https://static.tildacdn.com/stor6439-3364-4931-a636-306231666163/98315236.png",
      description: `Yeezy 450 "Cloud White" is an innovative model from Adidas and Kanye West. These sneakers have a unique design with a polymer upper that creates a cloud effect.`,
    },
    {
      title: "Adidas Yeezy 700 V3 Alvah",
      img: "https://static.tildacdn.com/stor3332-3864-4433-b734-663735363235/66481959.png",
      description:
        "The upper of the sneakers consists of a monofilament mesh fabric in black and gray shades with wave patterns and plastic inserts that glow in the dark.",
    },
    {
      title: "Yeezy 500 Taupe Light",
      img: "https://static.tildacdn.com/stor6332-3334-4231-b035-373732313763/97105166.png",
      description:
        "The upper consists of open mesh reinforced with leather and suede overlays.",
    },
  ],
  outerwear: [
    {
      title: "LIGHT SOFT SHELL Black",
      img: "https://static.tildacdn.com/stor6564-3634-4937-a565-306537653632/68434432.jpg",
      description:
        "A jacket with a hood made of Soft Shell-R material - a high-tech material with a high water resistance coefficient: 8000 mm.",
    },
    {
      title: "C.P. Company Chrome Lens Overshirt Navy",
      img: "https://static.tildacdn.com/stor3139-3033-4432-b466-353263313135/58618305.png",
      description:
        "Quick-drying and water-resistant, made using Taylon P technology - a mixture of nylon with taslanized and monofilament.",
    },
    {
      title: "Arc’teryx LEAF Alpha LT Jacket Gen 2 Black",
      img: "https://static.tildacdn.com/stor6637-3639-4562-a162-646262363638/31994416.png",
      description:
        "The durable GORE-TEX® Pro Shell coating perfectly protects against the weather. Equipped with a storm collar and a drawstring at the bottom edge.",
    },
    {
      title: "Arc’teryx GORE-TEX Therme Parka Navy",
      img: "https://static.tildacdn.com/stor3632-6635-4437-b637-376363346632/36174607.jpg",
      description:
        "Fully waterproof and windproof thanks to the breathable GORE-TEX® membrane fabric.",
    },
  ],
  hoodie: [
    {
      title: "Zip Hooded Sweatshirt Teal",
      description: `Velvety cotton sweatshirt with sequins and hood.`,
      img: "https://static.tildacdn.com/stor6262-3933-4665-a637-663466663961/89201851.jpg",
    },
    {
      title: "DUST COLOUR TREATMENT Grey",
      description: "Hooded sweatshirt in mercerized cotton.",
      img: "https://static.tildacdn.com/stor3133-3361-4161-a563-346639303666/76043305.jpg",
    },
    {
      title: "Hooded Sweatshirt Sand",
      description: "Hooded sweatshirt in mercerized cotton.",
      img: "https://static.tildacdn.com/tild3836-3136-4139-b737-616362373433/5.png",
    },
    {
      title: "Hooded Sweatshirt Blue Marine",
      description: "Hooded sweatshirt in mercerized cotton.",
      img: "https://static.tildacdn.com/tild3130-3535-4835-b061-373431353833/stone-island-sweatsh.jpg",
    },
    {
      title: "C.P. Company Lens Viewer Hoodie Olive",
      description: "Lightweight pullover in buff knit with dropped back",
      img: "https://static.tildacdn.com/stor3434-3130-4932-b733-633830383730/75642761.png",
    },
    {
      title: "Carhartt WIP Duster Hooded Washed Purple",
      description: "Model made of soft, mixed butter and soft ribbed trim.",
      img: "https://static.tildacdn.com/stor6563-6234-4935-b436-303063313632/39108741.png",
    },
    {
      title: "Carhartt WIP Patch Zip Hoodie Washed Black",
      description: "The hoodie is made from fine cotton jersey.",
      img: "https://static.tildacdn.com/stor6435-3437-4633-b539-316161366262/27541363.png",
    },
    {
      title: "Zip Hooded Sweatshirt Deep Green",
      description: "Full-zip sweatshirt with hood made from velvety cotton.",
      img: "https://static.tildacdn.com/stor6439-6538-4437-a166-373230323964/78338071.jpg",
    },
    {
      title: "Kith Knitted Embroidered Logo Heavy Hoodie Gray",
      img: "https://static.tildacdn.com/stor3139-3863-4463-b764-356537323862/53271017.png",
      description:
        "Knitted hoodie with important knitting in a series of colors.",
    },
    {
      title: "Kith Corduroy Double Pocket Hoodie Buttercream",
      img: "https://static.tildacdn.com/stor3638-3939-4235-b934-353066383330/63040833.png",
      description:
        "It is made in a milky color and has a corduroy texture, which gives it a special charm.",
    },
    {
      title: "CAV EMPT Print Hoodie Black",
      img: "https://static.tildacdn.com/stor6265-3239-4634-b538-396437386232/31978689.png",
      description:
        "One of the founders of the Sk8thing brand, for example, was previously responsible for graphic design at Bape, Billionaire Boys Club, HUMAN MADE and Ice Cream.",
    },
    {
      title: "NOAH Classic Lightweight Zip-Up Hoodie Grey",
      description: "Long Sleeve Cotton Fleece Hoodie, 9oz, Gray.",
      img: "https://static.tildacdn.com/stor6561-6638-4639-b639-323337323832/92974125.jpg",
    },
  ],
};

const Catalog = ({ params }: CatalogProps) => {
  const { slug } = params;
  return (
    <View
      data={products[slug]}
      category={slug[0].toUpperCase() + slug.slice(1)}
    />
  );
};

export default Catalog;
