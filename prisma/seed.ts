import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allergies = await prisma.allergy.createMany({
    data: [
      { name: 'gluten' },
      { name: 'mel' },
      { name: 'ovos' },
      { name: 'peixe' },
      { name: 'amendoim' },
      { name: 'soja' },
      { name: 'leite' },
      { name: 'nozes' },
      { name: 'feijão' },
      { name: 'mariscos' },
      { name: 'mostarda' },
      { name: 'cogumelo' },
      { name: 'crustáceos' },
      { name: 'sulfato' },
      { name: 'milho' },
      { name: 'gergelim' },
      { name: 'salsa' },
    ],
    skipDuplicates: true,
  });

  const foodProfiles = await prisma.foodProfile.createMany({
    data: [
      { name: 'vegano' },
      { name: 'vegetariano' },
      { name: 'carnívoro' },
      { name: 'ovo-lacto-vegetariano' },
      { name: 'cetogênico' },
      { name: 'sem açúcar' },
      { name: 'paleolítico' },
      { name: 'mediterrâneo' },
      { name: 'low carb' },
      { name: 'Onívoro' },
    ],
    skipDuplicates: true,
  });

  console.log('ALLERGIES', allergies);

  console.log('FOOD PROFILES', foodProfiles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
