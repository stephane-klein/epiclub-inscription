/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import {
  Box,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Divider,
  Button
} from "@chakra-ui/core";
import InputMask from "react-input-mask";
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements } from "@stripe/react-stripe-js";

function IndexPage() {
  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

  return (
    <Box mx="auto" maxW="48rem">
      <Stack p={4} spacing={4}>
        <Heading as="h1" size="lg">S'inscrire au club de Tennis de Table EPI Club</Heading>

        <Text>Formulaire d'inscription au club de Tennis de Table EPI Club d'Issy-Les-Moulinaux.</Text>

        <Text>Via ce formulaire, vous pourrez :

        <List styleType="disc">
          <ListItem>vous inscrire au club pour accéder à la salle, participer aux entrainements et aux compétitions</ListItem>
          <ListItem>régler votre cotisation</ListItem>
          <ListItem>sélectionner vos préférences de crénaux d'entrainement</ListItem>
        </List>
        </Text>
        
        <FormControl>
          <FormLabel htmlFor="prenom">Prénom</FormLabel>
          <Input id="prenom" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="nom">Nom</FormLabel>
          <Input id="nom" />
        </FormControl>
        <FormControl>
          <RadioGroup>
            <Radio value="homme">Homme</Radio>
            <Radio value="femme">Femme</Radio>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="dateDeNaissance">Date de naissance</FormLabel>
          <Input
            as={InputMask}
            mask="99/99/9999"
            id="dateDeNaissance"
            placeholder="jj/mm/aaaa"
          />
        </FormControl>

        <Divider borderColor="gray.400" />

        <Heading as="h2" size="md">Informations de contact</Heading>

        <FormControl>
          <FormLabel htmlFor="email">Adresse mail</FormLabel>
          <Input type="email" id="email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="telephone">Téléphone</FormLabel>
          <Input id="telephone" />
        </FormControl>

        <Divider borderColor="gray.400" />

        <Heading as="h2" size="md">Adresse postale</Heading>

        <FormControl>
          <FormLabel htmlFor="rue">Numéro et rue</FormLabel>
          <Input id="rue" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="rue">Code postal</FormLabel>
          <Input id="codePostal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="rue">Ville</FormLabel>
          <Input id="ville" />
        </FormControl>

        <Divider borderColor="gray.400" />

        <Heading as="h2" size="md">Informations concernant les compétitions</Heading>

        <FormControl>
          <FormLabel htmlFor="rue">Êtes vous un joueur extérieur qui souhaite uniquement s'entrainer ?</FormLabel>
          <RadioGroup>
            <Radio value="oui">oui</Radio>
            <Radio value="non">non</Radio>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="rue">Souhaitez vous participer aux compétitions <a href="https://fr.wikipedia.org/wiki/F%C3%A9d%C3%A9ration_fran%C3%A7aise_de_tennis_de_table">FFTT</a> ?</FormLabel>
          <RadioGroup>
            <Radio value="oui">oui</Radio>
            <Radio value="non">non</Radio>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="rue">Souhaitez vous participer au critérium fédéral FFTT ?</FormLabel>
          <RadioGroup>
            <Radio value="oui">oui</Radio>
            <Radio value="non">non</Radio>
          </RadioGroup>
        </FormControl>

        <Divider borderColor="gray.400" />

        <Heading as="h2" size="md">Préférences d'entrainement</Heading>

        <FormControl>
          <FormLabel htmlFor="rue">Souhaitez participer à des entrainements encadrés ?</FormLabel>
          <RadioGroup>
            <Radio value="oui">oui</Radio>
            <Radio value="non">non</Radio>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="rue">À quelle séance souhaitez vous être prioritaire ?</FormLabel>
          <RadioGroup>
            <table
              css={css`
                width: 100%;
                font-size: 0.8em;
                tr {
                  border-bottom: 1px solid #aaa;
                  td, th {
                    padding: 0.5rem 0;
                  }

                  th {
                    text-align: left;
                  }
                }
              `}
            >
              <tr>
                <th>Public cible</th>
                <th>Lieu / Salle</th>
                <th>Jour</th>
                <th>Horaire</th>
              </tr>
              <tr>
                <td>Jeunes débutants / collégiens / lycéens</td>
                <td>Mimoun</td>
                <td>Lundi</td>
                <td>17h00-19h30</td>
                <td><Radio value="jeunes-mimoun-lundi-1700-1930"/></td>
              </tr>
              <tr>
                <td>Jeunes débutants</td>
                <td>Jacques Goddet</td>
                <td>Lundi</td>
                <td>18h15-19h45</td>
                <td><Radio value="jeunes-jacques-goddet-lundi-1815-1945"/></td>
              </tr>
              <tr>
                <td>Adultes loisirs + compétiteurs départementaux</td>
                <td>Mimoun</td>
                <td>Lundi</td>
                <td>20h00-22h00</td>
                <td><Radio value="adultes-mimoun-lundi-2000-2200"/></td>
              </tr>
              <tr>
                <td>Sport Promo</td>
                <td>Mimoun</td>
                <td>Mardi</td>
                <td>16h30-18h30</td>
                <td><Radio value="sport-promo-mimoun-mardi-1630-1830"/></td>
              </tr>
              <tr>
                <td>Jeunes débutants (CP, CE1, CE2)</td>
                <td>Mimoun</td>
                <td>Mercredi</td>
                <td>10h00-11h00</td>
                <td><Radio value="jeunes-debutant-mimoun-mercredi-1000-1100"/></td>
              </tr>
              <tr>
                <td>Jeunes débutants</td>
                <td>Mimoun</td>
                <td>Mercredi</td>
                <td>13h30-15h00</td>
                <td><Radio value="jeunes-debutant-mimoun-mercredi-1330-1500"/></td>
              </tr>
              <tr>
                <td>Jeunes collégiens / Lycéens</td>
                <td>Mimoun</td>
                <td>Mercredi</td>
                <td>17h30-18h45</td>
                <td><Radio value="jeunes-mimoun-mercredi-1730-1845"/></td>
              </tr>
              <tr>
                <td>Jeunes collégiens / Lycéens</td>
                <td>Mimoun</td>
                <td>Mercredi</td>
                <td>18h45-20h00</td>
                <td><Radio value="jeunes-mimoun-mercredi-1845-2000"/></td>
              </tr>
              <tr>
                <td>Adultes compétiteurs</td>
                <td>Mimoun</td>
                <td>Mercredi</td>
                <td>20h00-22h00</td>
                <td><Radio value="adultes-mimoun-mercredi-2000-2200"/></td>
              </tr>
              <tr>
                <td>Jeunes débutants</td>
                <td>Henri Matisse</td>
                <td>Jeudi</td>
                <td>17h30-19h30</td>
                <td><Radio value="jeunes-debutants-henri-matisse-jeudi-1730-1930"/></td>
              </tr>
              <tr>
                <td>Sport Promo</td>
                <td>Mimoun</td>
                <td>Vendredi</td>
                <td>16h30-18h30</td>
                <td><Radio value="sport-promo-mimoun-vendredi-1630-1830"/></td>
              </tr>
              <tr>
                <td>Jeunes débutants</td>
                <td>Jacques Goddet</td>
                <td>Vendredi</td>
                <td>18h15-19h30</td>
                <td><Radio value="jeunes-debutants-jacques-goddet-vendredi-1815-1930"/></td>
              </tr>
              <tr>
                <td>Jeunes collégiens / lycéens</td>
                <td>Mimoun</td>
                <td>Vendredi</td>
                <td>18h30-20h00</td>
                <td><Radio value="jeunes-mimoun-vendredi-1830-2000"/></td>
              </tr>
              <tr>
                <td>Jeunes compétiteurs</td>
                <td>Mimoun</td>
                <td>Samedi</td>
                <td>10h30-12h30</td>
                <td><Radio value="jeunes-competiteurs-mimoun-samedi-1030-1230"/></td>
              </tr>
              <tr>
                <td>Adultes compétiteurs</td>
                <td>Mimoun</td>
                <td>Samedi</td>
                <td>10h30-12h30</td>
                <td><Radio value="adultes-competiteurs-mimoun-samedi-1030-1230"/></td>
              </tr>
            </table>
          </RadioGroup>
        </FormControl>

        <Divider borderColor="gray.400" />

        <Heading as="h2" size="md">Montant de la cotisation</Heading>

        <Text>Total : 260 €</Text>

        <FormControl>
          <FormLabel htmlFor="rue">Mode de paiement ?</FormLabel>
          <RadioGroup>
            <Radio value="carteBancaire">Carte bancaire</Radio>
            <Radio value="cheque">Chèque</Radio>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="carteBancaire">Carte bancaire</FormLabel>
          <Elements stripe={stripePromise}>
            <CardElement />
          </Elements>
        </FormControl>
        
        <Divider borderColor="gray.400" />

        <Button>Valider mon inscription</Button>
      </Stack>
    </Box>
  );
}

export default IndexPage;