document.addEventListener('DOMContentLoaded', function() {
    const gameData = [
        {
            "Art Piece Name": "Salvator Mundi",
            "Artist Name": "Leonardo da Vinci",
            "Original Price (million USD)": "$450.3",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Leonardo_da_Vinci%2C_Salvator_Mundi%2C_c.1500%2C_oil_on_walnut%2C_45.4_%C3%97_65.6_cm.jpg/95px-Leonardo_da_Vinci%2C_Salvator_Mundi%2C_c.1500%2C_oil_on_walnut%2C_45.4_%C3%97_65.6_cm.jpg"
        },
        {
            "Art Piece Name": "The Card Players",
            "Artist Name": "Paul C\u00e9zanne",
            "Original Price (million USD)": "$250",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_collection_Al-Thani%2C_Yorck.jpg/95px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_collection_Al-Thani%2C_Yorck.jpg"
        },
        {
            "Art Piece Name": "Nafea Faa Ipoipo(When Will You Marry?)",
            "Artist Name": "Paul Gauguin",
            "Original Price (million USD)": "$210",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paul_Gauguin%2C_Nafea_Faa_Ipoipo%3F_%28When_Will_You_Marry%3F%29_1892%2C_oil_on_canvas%2C_101_x_77_cm.jpg/95px-Paul_Gauguin%2C_Nafea_Faa_Ipoipo%3F_%28When_Will_You_Marry%3F%29_1892%2C_oil_on_canvas%2C_101_x_77_cm.jpg"
        },
        {
            "Art Piece Name": "Wasserschlangen II",
            "Artist Name": "Gustav Klimt",
            "Original Price (million USD)": "$183.8",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Klimt_-_Wasserschlangen_II_%28Freundinnen%29_-_1904.jpeg/95px-Klimt_-_Wasserschlangen_II_%28Freundinnen%29_-_1904.jpeg"
        },
        {
            "Art Piece Name": "Pendant portraits of Maerten Soolmans and Oopjen Coppit",
            "Artist Name": "Rembrandt",
            "Original Price (million USD)": "$180",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Pendant_portraits_of_Maerten_Soolmans_and_Oopjen_Coppit.jpeg/95px-Pendant_portraits_of_Maerten_Soolmans_and_Oopjen_Coppit.jpeg"
        },
        {
            "Art Piece Name": "The Standard Bearer",
            "Artist Name": "Rembrandt",
            "Original Price (million USD)": "$198",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Rembrandt_-_De_vaandeldrager_%28Q21467444%29.jpeg/95px-Rembrandt_-_De_vaandeldrager_%28Q21467444%29.jpeg"
        },
        {
            "Art Piece Name": "Nu couch\u00e9",
            "Artist Name": "Amedeo Modigliani",
            "Original Price (million USD)": "$170.4",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Modigliani_-_Nu_couch%C3%A9.jpg/95px-Modigliani_-_Nu_couch%C3%A9.jpg"
        },
        {
            "Art Piece Name": "Portrait of Adele Bloch-Bauer I",
            "Artist Name": "Gustav Klimt",
            "Original Price (million USD)": "$135",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gustav_Klimt%2C_1907%2C_Adele_Bloch-Bauer_I%2C_Neue_Galerie_New_York.jpg/95px-Gustav_Klimt%2C_1907%2C_Adele_Bloch-Bauer_I%2C_Neue_Galerie_New_York.jpg"
        },
        {
            "Art Piece Name": "Portrait of Dr. Gachet",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$82.5",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Portrait_of_Dr._Gachet.jpg/95px-Portrait_of_Dr._Gachet.jpg"
        },
        {
            "Art Piece Name": "Nu couch\u00e9 (sur le c\u00f4t\u00e9 gauche)",
            "Artist Name": "Amedeo Modigliani",
            "Original Price (million USD)": "$157.2",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Amedeo_Modigliani_014.jpg/95px-Amedeo_Modigliani_014.jpg"
        },
        {
            "Art Piece Name": "Portrait of Adele Bloch-Bauer II",
            "Artist Name": "Gustav Klimt",
            "Original Price (million USD)": "$150",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gustav_Klimt_047.jpg/85px-Gustav_Klimt_047.jpg"
        },
        {
            "Art Piece Name": "Bal du moulin de la Galette[note 8]",
            "Artist Name": "Pierre-Auguste Renoir",
            "Original Price (million USD)": "$78.1",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/95px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg"
        },
        {
            "Art Piece Name": "Gar\u00e7on \u00e0 la pipe",
            "Artist Name": "Pablo Picasso",
            "Original Price (million USD)": "$104.2",
            "Image URL": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Gar%C3%A7on_%C3%A0_la_pipe.jpg/95px-Gar%C3%A7on_%C3%A0_la_pipe.jpg"
        },
        {
            "Art Piece Name": "Les Poseuses, Ensemble (Petite version)",
            "Artist Name": "Georges Seurat",
            "Original Price (million USD)": "$149.2",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Georges_Seurat_047.jpg/95px-Georges_Seurat_047.jpg"
        },
        {
            "Art Piece Name": "The Scream[note 10]",
            "Artist Name": "Edvard Munch",
            "Original Price (million USD)": "$119.9",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Scream_Pastel.jpg/95px-The_Scream_Pastel.jpg"
        },
        {
            "Art Piece Name": "Otahi",
            "Artist Name": "Paul Gauguin",
            "Original Price (million USD)": "$120",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Paul_Gauguin_093.jpg/95px-Paul_Gauguin_093.jpg"
        },
        {
            "Art Piece Name": "Reclining Nude With Blue Cushion",
            "Artist Name": "Amedeo Modigliani",
            "Original Price (million USD)": "$118",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amedeo_Modigliani_Nu_Couch%C3%A9_au_coussin_Bleu.jpg/95px-Amedeo_Modigliani_Nu_Couch%C3%A9_au_coussin_Bleu.jpg"
        },
        {
            "Art Piece Name": "La Montagne Sainte-Victoire",
            "Artist Name": "Paul Cezanne",
            "Original Price (million USD)": "$137.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Montagne_Sainte-Victoire%2C_par_Paul_C%C3%A9zanne_114.jpg/95px-Montagne_Sainte-Victoire%2C_par_Paul_C%C3%A9zanne_114.jpg"
        },
        {
            "Art Piece Name": "Portrait of Joseph Roulin",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$58",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vincent_van_Gogh_-_Portrait_of_Joseph_Roulin.jpg/95px-Vincent_van_Gogh_-_Portrait_of_Joseph_Roulin.jpg"
        },
        {
            "Art Piece Name": "Irises",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$53.9",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/95px-Irises-Vincent_van_Gogh.jpg"
        },
        {
            "Art Piece Name": "Young Girl with a Flower Basket",
            "Artist Name": "Pablo Picasso",
            "Original Price (million USD)": "$115",
            "Image URL": "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Pablo_Picasso%2C_1905%2C_Fillette_nue_au_panier_de_fleurs_%28Le_panier_fleuri%29%2C_oil_on_canvas%2C_155_x_66_cm%2C_private_collection%2C_New_York.jpg/65px-Pablo_Picasso%2C_1905%2C_Fillette_nue_au_panier_de_fleurs_%28Le_panier_fleuri%29%2C_oil_on_canvas%2C_155_x_66_cm%2C_private_collection%2C_New_York.jpg"
        },
        {
            "Art Piece Name": "Portrait de l'artiste sans barbe",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$71.5",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vincent_Willem_van_Gogh_102.jpg/95px-Vincent_Willem_van_Gogh_102.jpg"
        },
        {
            "Art Piece Name": "Meules",
            "Artist Name": "Claude Monet",
            "Original Price (million USD)": "$110.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Claude_Monet_-_Meules_%28W_1273%29.jpg/95px-Claude_Monet_-_Meules_%28W_1273%29.jpg"
        },
        {
            "Art Piece Name": "Verger avec cypr\u00e8s",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$117.1",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Van_Gogh_-_Bl%C3%BChender_Obstgarten_mit_Pfirsichb%C3%A4umen.jpeg/95px-Van_Gogh_-_Bl%C3%BChender_Obstgarten_mit_Pfirsichb%C3%A4umen.jpeg"
        },
        {
            "Art Piece Name": "La Montagne Sainte-Victoire vue du bosquet du Ch\u00e2teau Noir",
            "Artist Name": "Paul C\u00e9zanne",
            "Original Price (million USD)": "$100",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/La_Montagne_Sainte-Victoire_vue_du_bosquet_du_Ch%C3%A2teau_Noir%2C_par_Paul_C%C3%A9zanne.jpg/95px-La_Montagne_Sainte-Victoire_vue_du_bosquet_du_Ch%C3%A2teau_Noir%2C_par_Paul_C%C3%A9zanne.jpg"
        },
        {
            "Art Piece Name": "Massacre of the Innocents",
            "Artist Name": "Peter Paul Rubens",
            "Original Price (million USD)": "$76.7(\u00a349.5)",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/0_Le_Massacre_des_Innocents_d%27apr%C3%A8s_P.P._Rubens_-_Mus%C3%A9es_royaux_des_beaux-arts_de_Belgique_%282%29.JPG/95px-0_Le_Massacre_des_Innocents_d%27apr%C3%A8s_P.P._Rubens_-_Mus%C3%A9es_royaux_des_beaux-arts_de_Belgique_%282%29.JPG"
        },
        {
            "Art Piece Name": "Maternit\u00e8 II",
            "Artist Name": "Paul Gauguin",
            "Original Price (million USD)": "$105.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Paul_gauguin_maternit233_ii100257%29.jpg/95px-Paul_gauguin_maternit233_ii100257%29.jpg"
        },
        {
            "Art Piece Name": "Birch Forest",
            "Artist Name": "Gustav Klimt",
            "Original Price (million USD)": "$104.5",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gustav_Klimt%2C_Birch_Forest%2C_1903_-_Paul_G._Allen_Collection.jpg/95px-Gustav_Klimt%2C_Birch_Forest%2C_1903_-_Paul_G._Allen_Collection.jpg"
        },
        {
            "Art Piece Name": "Te Fare",
            "Artist Name": "Paul Gauguin",
            "Original Price (million USD)": "$85(\u20ac54)",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Te_Fare_%28La_maison%29_Paul_Gauguin_1892.jpg/95px-Te_Fare_%28La_maison%29_Paul_Gauguin_1892.jpg"
        },
        {
            "Art Piece Name": "A Wheatfield with Cypresses",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$57",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg/95px-Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg"
        },
        {
            "Art Piece Name": "Portrait of Alfonso d'Avalos with a Page",
            "Artist Name": "Titian",
            "Original Price (million USD)": "$70.0",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Titian_%28Tiziano_Vecellio%29_%28Italian%29_-_Portrait_of_Alfonso_d%27Avalos%2C_Marquis_of_Vasto%2C_in_Armor_with_a_Page_-_Google_Art_Project.jpg/95px-Titian_%28Tiziano_Vecellio%29_%28Italian%29_-_Portrait_of_Alfonso_d%27Avalos%2C_Marquis_of_Vasto%2C_in_Armor_with_a_Page_-_Google_Art_Project.jpg"
        },
        {
            "Art Piece Name": "Le Bassin aux Nymph\u00e9as",
            "Artist Name": "Claude Monet",
            "Original Price (million USD)": "$80.5(\u00a340.9)",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Le_bassin_aux_nymph%C3%A9as_-_Claude_Monet.jpg/95px-Le_bassin_aux_nymph%C3%A9as_-_Claude_Monet.jpg"
        },
        {
            "Art Piece Name": "Lady with a Fan",
            "Artist Name": "Gustav Klimt",
            "Original Price (million USD)": "$108.4(\u00a385.3)",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Gustav_Klimt_-_Dame_mit_F%C3%A4cher.jpeg/125px-Gustav_Klimt_-_Dame_mit_F%C3%A4cher.jpeg"
        },
        {
            "Art Piece Name": "Rideau, Cruchon et Compotier",
            "Artist Name": "Paul C\u00e9zanne",
            "Original Price (million USD)": "$60.5",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rideau%2C_Cruchon_et_Compotier%2C_par_Paul_C%C3%A9zanne.jpg/95px-Rideau%2C_Cruchon_et_Compotier%2C_par_Paul_C%C3%A9zanne.jpg"
        },
        {
            "Art Piece Name": "Vase with Fifteen Sunflowers",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$39.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg/95px-Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg"
        },
        {
            "Art Piece Name": "Suprematist Composition",
            "Artist Name": "Kazimir Malevich",
            "Original Price (million USD)": "$85.8",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Suprematist_Composition_-_Kazimir_Malevich.jpg/95px-Suprematist_Composition_-_Kazimir_Malevich.jpg"
        },
        {
            "Art Piece Name": "Portrait of a Young Man holding a Roundel",
            "Artist Name": "Sandro Botticelli",
            "Original Price (million USD)": "$92.2",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Botticelli_-_Portrait_of_a_young_man_holding_a_medallion.jpg/95px-Botticelli_-_Portrait_of_a_young_man_holding_a_medallion.jpg"
        },
        {
            "Art Piece Name": "Meule",
            "Artist Name": "Claude Monet",
            "Original Price (million USD)": "$81.4",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Monet_Grainstack_in_the_Sunlight_1891.jpg/95px-Monet_Grainstack_in_the_Sunlight_1891.jpg"
        },
        {
            "Art Piece Name": "Nymph\u00e9as en fleur",
            "Artist Name": "Claude Monet",
            "Original Price (million USD)": "$84.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Claude_Monet_-_Nympheas_en_fleur.jpg/95px-Claude_Monet_-_Nympheas_en_fleur.jpg"
        },
        {
            "Art Piece Name": "Darmstadt Madonna",
            "Artist Name": "Hans Holbein",
            "Original Price (million USD)": "$75",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Darmstadtmadonna.jpg/95px-Darmstadtmadonna.jpg"
        },
        {
            "Art Piece Name": "Laboureur dans un champ",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$81.3",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Van_Gogh_-_Acker_mit_pfl%C3%BCgenden_Bauern.jpeg/95px-Van_Gogh_-_Acker_mit_pfl%C3%BCgenden_Bauern.jpeg"
        },
        {
            "Art Piece Name": "Diana and Actaeon",
            "Artist Name": "Titian",
            "Original Price (million USD)": "$70.6",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Titian_-_Diana_and_Actaeon_-_1556-1559.jpg/95px-Titian_-_Diana_and_Actaeon_-_1556-1559.jpg"
        },
        {
            "Art Piece Name": "Au Lapin Agile",
            "Artist Name": "Pablo Picasso",
            "Original Price (million USD)": "$40.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg/95px-Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg"
        },
        {
            "Art Piece Name": "The Gross Clinic",
            "Artist Name": "Thomas Eakins",
            "Original Price (million USD)": "$68",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg/95px-Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg"
        },
        {
            "Art Piece Name": "Femme aux Bras Crois\u00e9s",
            "Artist Name": "Pablo Picasso",
            "Original Price (million USD)": "$55.0",
            "Image URL": "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Pablo_Picasso%2C_1901-02%2C_Femme_aux_Bras_Crois%C3%A9s%2C_Woman_with_Folded_Arms_%28Madchenbildnis%29%2C_oil_on_canvas%2C_81_%C3%97_58_cm_%2832_%C3%97_23_in%29.jpg/95px-Pablo_Picasso%2C_1901-02%2C_Femme_aux_Bras_Crois%C3%A9s%2C_Woman_with_Folded_Arms_%28Madchenbildnis%29%2C_oil_on_canvas%2C_81_%C3%97_58_cm_%2832_%C3%97_23_in%29.jpg"
        },
        {
            "Art Piece Name": "Nude Sitting on a Divan",
            "Artist Name": "Amedeo Modigliani",
            "Original Price (million USD)": "$69.0",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Amedeo_Modigliani_063.jpg/85px-Amedeo_Modigliani_063.jpg"
        },
        {
            "Art Piece Name": "Diana and Callisto",
            "Artist Name": "Titian",
            "Original Price (million USD)": "$71.7",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/TitianDianaCallistoEdinburgh.jpg/95px-TitianDianaCallistoEdinburgh.jpg"
        },
        {
            "Art Piece Name": "Ten Views Of Lingbi Rock[zh][141]",
            "Artist Name": "Wu Bin",
            "Original Price (million USD)": "$77",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/%E5%8D%81%E9%9D%A2%E7%81%B5%E7%92%A7%E5%9B%BE%E5%8D%B7_%E5%89%8D%E6%AD%A3%E9%9D%A2%E5%B1%80%E9%83%A8.jpg/95px-%E5%8D%81%E9%9D%A2%E7%81%B5%E7%92%A7%E5%9B%BE%E5%8D%B7_%E5%89%8D%E6%AD%A3%E9%9D%A2%E5%B1%80%E9%83%A8.jpg"
        },
        {
            "Art Piece Name": "Peasant Woman Against a Background of Wheat",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$47.5",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vincent_Willem_van_Gogh_097.jpg/95px-Vincent_Willem_van_Gogh_097.jpg"
        },
        {
            "Art Piece Name": "Eagle Standing on Pine Tree[151]",
            "Artist Name": "Qi Baishi",
            "Original Price (million USD)": "$65.5",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Qi_Baishi_Eagle.jpg/95px-Qi_Baishi_Eagle.jpg"
        },
        {
            "Art Piece Name": "La Gommeuse",
            "Artist Name": "Pablo Picasso",
            "Original Price (million USD)": "$67.45",
            "Image URL": "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Pablo_Picasso_-_La_Gommeuse.jpg/85px-Pablo_Picasso_-_La_Gommeuse.jpg"
        },
        {
            "Art Piece Name": "Portrait of a Halberdier",
            "Artist Name": "Pontormo",
            "Original Price (million USD)": "$35.2",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Pontormo_%28Jacopo_Carucci%29_%28Italian%2C_Florentine%29_-_Portrait_of_a_Halberdier_%28Francesco_Guardi%3F%29_-_Google_Art_Project.jpg/95px-Pontormo_%28Jacopo_Carucci%29_%28Italian%2C_Florentine%29_-_Portrait_of_a_Halberdier_%28Francesco_Guardi%3F%29_-_Google_Art_Project.jpg"
        },
        {
            "Art Piece Name": "L\u2019All\u00e9e des Alyscamps",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$66.3",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Van_Gogh_-_Les_Alyscamps%2C_Allee_in_Arles1.jpeg/95px-Van_Gogh_-_Les_Alyscamps%2C_Allee_in_Arles1.jpeg"
        },
        {
            "Art Piece Name": "Zhichuan Resettlement[161]",
            "Artist Name": "Wang Meng",
            "Original Price (million USD)": "$62.1",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/ZhichuanResettlement.jpg/65px-ZhichuanResettlement.jpg"
        },
        {
            "Art Piece Name": "Spring",
            "Artist Name": "\u00c9douard Manet",
            "Original Price (million USD)": "$65.1",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%C3%89douard_Manet_-_Jeanne_%28Spring%29.jpg/95px-%C3%89douard_Manet_-_Jeanne_%28Spring%29.jpg"
        },
        {
            "Art Piece Name": "Cabanes de bois parmi les oliviers et cypr\u00e8s",
            "Artist Name": "Vincent van Gogh",
            "Original Price (million USD)": "$71.4",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Vincent_van_Gogh_-_Cabanes_de_bois_parmi_les_oliviers_et_cypr%C3%A9s_%28F_623%29.jpg/95px-Vincent_van_Gogh_-_Cabanes_de_bois_parmi_les_oliviers_et_cypr%C3%A9s_%28F_623%29.jpg"
        },
        {
            "Art Piece Name": "Le Bassin Aux Nymph\u00e9as (1917-19)",
            "Artist Name": "Claude Monet",
            "Original Price (million USD)": "$70.35",
            "Image URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Water-Lily_Pond_Monet.jpg/95px-Water-Lily_Pond_Monet.jpg"
        }
    ];

    let currentRound = 0;
    let totalScore = 0;
    let cumulativeDifference = 0;

    let isGuessSubmitted = false;

    function updateGame() {
        const artData = gameData[currentRound];
        document.getElementById('art-image').src = artData["Image URL"];
        document.getElementById('art-piece-name').textContent = artData["Art Piece Name"];
        document.getElementById('artist-name').textContent = artData["Artist Name"];
        document.getElementById('current-round').textContent = currentRound + 1;
        document.getElementById('user-guess').value = '';
        document.getElementById('user-guess').style.display = 'block';
        document.getElementById('submit-guess').textContent = 'Submit Guess';
        document.getElementById('original-price').style.display = 'none';
        isGuessSubmitted = false;
    }

    function createDigitElements(price) {
        const priceContainer = document.getElementById('original-price-value');
        priceContainer.innerHTML = ''; // Clear previous content
      
        // Split the price into individual digits
        const digits = price.toString().split('');
      
        // Create a span for each digit with an animation delay
        digits.forEach((digit, index) => {
          const digitSpan = document.createElement('span');
          digitSpan.classList.add('digit');
          digitSpan.textContent = digit;
          digitSpan.style.animation = `slotMachine 0.5s ${index * 40000}ms forwards`; // Apply animation with delay
      
          const digitContainer = document.createElement('div');
          digitContainer.classList.add('digit-container');
          digitContainer.appendChild(digitSpan);
      
          priceContainer.appendChild(digitContainer);
        });
      }

    function revealOriginalPrice() {
        const originalPriceElement = document.getElementById('original-price-value');
        const originalPrice = gameData[currentRound]["Original Price (million USD)"].replace(/[^0-9.]/g, "");
    
        // Animate the original price value
        originalPriceElement.style.transform = 'translateY(-100%)'; // Move the element up
        setTimeout(() => {
            originalPriceElement.textContent = originalPrice;
            originalPriceElement.style.transform = 'translateY(0)'; // Reset to original position
        }, 3000); // This timeout should match the CSS transition duration
    
        createDigitElements(originalPrice);
        document.getElementById('original-price').style.display = 'block';
        document.getElementById('submit-guess').textContent = 'Next';
        document.getElementById('user-guess').style.display = 'none';
        isGuessSubmitted = true;
    }

     

    function calculateScore(userGuess, originalPrice) {
        // Parse the user's guess and original price to numbers
        const guess = parseFloat(userGuess);
        const price = parseFloat(originalPrice.replace(/[^0-9.]/g, ""));
        const difference = guess - price;
        cumulativeDifference += difference;  // Update cumulative difference
    
        // Update the gain/loss display
        const userGuessValueElement = document.getElementById('user-guess-value');
        const gainLossValueElement = document.getElementById('gain-loss-value');
        const cumulativeDifferenceValueElement = document.getElementById('cumulative-difference-value');
        const gainLossInfo = document.getElementById('gain-loss-info');
    
        userGuessValueElement.textContent = guess.toFixed(2);
        gainLossValueElement.textContent = difference.toFixed(2);
        cumulativeDifferenceValueElement.textContent = cumulativeDifference.toFixed(2);
    
        // Apply the 'negative-difference' class if the difference is negative
        if (difference < 0) {
            gainLossValueElement.classList.add('negative-difference');
            cumulativeDifferenceValueElement.classList.add('negative-difference');
        } else {
            gainLossValueElement.classList.remove('negative-difference');
            cumulativeDifferenceValueElement.classList.remove('negative-difference');
        }
    
        
        gainLossInfo.style.display = 'block';  // Show the gain/loss info
    
        // Return the absolute value of difference for score calculation
        return Math.max(0, 100 - Math.abs(difference) * 10);  // Adjust the scoring as needed
    }
    
    function submitOrNextRound() {
        const userGuessElement = document.getElementById('user-guess');
        const userGuess = userGuessElement.value;
        if (userGuess === '') {
            alert('Please enter your guess.');
            return;
        }
        const originalPrice = gameData[currentRound]["Original Price (million USD)"].replace(/[^0-9.]/g, "");
        const difference = calculateScore(userGuess, originalPrice);
        totalScore += difference;
        document.getElementById('user-score').textContent = totalScore.toFixed(2);
        revealOriginalPrice();
    
        // If "Next" button is clicked
        if (isGuessSubmitted) {
            if (currentRound < 8) {
                currentRound++;
                updateGame();
            } else {
                alert(`Game over! Your final score is: ${totalScore.toFixed(2)}`);
                // Handle end of game
            }
        }
    }

    document.getElementById('submit-guess').addEventListener('click', submitOrNextRound);

    updateGame();
});
