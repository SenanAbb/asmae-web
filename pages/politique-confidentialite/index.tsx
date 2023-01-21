import Navbar from "../../components/Navbar";
import styles from "./politque-privacite.module.scss";
import useTranslation from "next-translate/useTranslation";
import Footer from "../../components/Footer";

const PolitiquePrivacite = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Navbar />
      <section className={styles.container}>
        <h1>Politique de confidentialité</h1>

        <div className={styles.paragraph}>
          <h3>Définitions</h3>
          <div className={styles.info}>
            <p>
              <b>L'Éditeur :</b> La personne, physique ou morale, qui édite les
              services de communication au public en ligne.
            </p>
            <p>
              <b>Le Site :</b> L'ensemble des sites pages Internet et services
              en ligne proposés par l'Éditeur.
            </p>
            <p>
              <b>L'Utilisateur : </b>La personne utilisant le Site et les
              services.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>
            Identité du responsable du traitement des données à caractère
            personnel
          </h3>
          <div className={styles.info}>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur Maître Asmae Kirimov est : Asmae Kirimov, avec le numéro de
              TVA : (ci-après, Responsable du traitement). Kirimov, numéro de
              TVA : (ci-après dénommé "le contrôleur de données"). Ses
              coordonnées sont les suivantes :
              <p>
                <b>Adresse : </b>22 rue des Cordeliers, 64 000 Pau
              </p>
              <p>
                <b>Numéro de téléphone du contact :</b> +33 641228153{" "}
              </p>
              <p>
                <b>Mail: </b>asmaekirimov.avocat@gmail.com
              </p>
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>1- Nature des données collectées</h3>
          <div className={styles.info}>
            <p>
              <b>
                Dans le cadre de l'utilisation des Sites, l'Éditeur est
                susceptible de collecter les catégories de données suivantes
                concernant ses Utilisateurs :
              </b>
            </p>
            <p>Données d'état-civil, d'identité, d'identification...</p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>2- Communication des données personnelles à des tiers</h3>
          <div className={styles.info}>
            <p>
              <b>Pas de communication à des tiers</b>
            </p>
            <p>
              Vos données ne font l'objet d'aucune communication à des tiers.
              Vous êtes toutefois informés qu'elles pourront être divulguées en
              application d'une loi, d'un règlement ou en vertu d'une décision
              d'une autorité réglementaire ou judiciaire compétente.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>
            3- Information préalable pour la communication des données
            personnelles à des tiers en cas de fusion / absorption
          </h3>
          <div className={styles.info}>
            <p>
              <b>
                Information préalable et possibilité d’opt-out avant et après la
                fusion / acquisition
              </b>
            </p>
            <p>
              Dans le cas où nous prendrions part à une opération de fusion,
              d’acquisition ou à toute autre forme de cession d’actifs, nous
              nous engageons à garantir la confidentialité de vos données
              personnelles et à vous informer avant que celles-ci ne soient
              transférées ou soumises à de nouvelles règles de confidentialité.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>4- Agrégation des données</h3>
          <div className={styles.info}>
            <p>
              <b>Agrégation avec des données non personnelles</b>
            </p>
            <p>
              Nous pouvons publier, divulguer et utiliser les informations
              agrégées (informations relatives à tous nos Utilisateurs ou à des
              groupes ou catégories spécifiques d'Utilisateurs que nous
              combinons de manière à ce qu'un Utilisateur individuel ne puisse
              plus être identifié ou mentionné) et les informations non
              personnelles à des fins d'analyse du secteur et du marché, de
              profilage démographique, à des fins promotionnelles et
              publicitaires et à d'autres fins commerciales.
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <b>
                Agrégation avec des données personnelles disponibles sur les
                comptes sociaux de l'Utilisateur
              </b>
            </p>
            <p>
              Si vous connectez votre compte à un compte d’un autre service afin
              de faire des envois croisés, ledit service pourra nous communiquer
              vos informations de profil, de connexion, ainsi que toute autre
              information dont vous avez autorisé la divulgation. Nous pouvons
              agréger les informations relatives à tous nos autres Utilisateurs,
              groupes, comptes, aux données personnelles disponibles sur
              l’Utilisateur.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>6- Collecte des données d'identification</h3>
          <div className={styles.info}>
            <p>
              <b>
                Utilisation de l'identifiant de l’utilisateur uniquement pour
                l’accès aux services
              </b>
            </p>
            <p>
              Nous utilisons vos identifiants électroniques seulement pour et
              pendant l'exécution du contrat.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>7- Collecte des données du terminal</h3>
          <div className={styles.info}>
            <p>
              <b>
                Utilisation de l'identifiant de l’utilisateur uniquement pour
                l’accès aux services
              </b>
            </p>
            <p>
              Nous utilisons vos identifiants électroniques seulement pour et
              pendant l'exécution du contrat.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>8- Cookies</h3>
          <div className={styles.info}>
            <p>
              <b>Durée de conservation des cookies</b>
            </p>
            <p>
              Conformément aux recommandations de la CNIL, la durée maximale de
              conservation des cookies est de 13 mois au maximum après leur
              premier dépôt dans le terminal de l'Utilisateur, tout comme la
              durée de la validité du consentement de l’Utilisateur à
              l’utilisation de ces cookies. La durée de vie des cookies n’est
              pas prolongée à chaque visite. Le consentement de l’Utilisateur
              devra donc être renouvelé à l'issue de ce délai.
            </p>
            <p>
              <b>Finalité cookies</b>
            </p>
            <p>
              Les cookies peuvent être utilisés pour des fins statistiques
              notamment pour optimiser les services rendus à l'Utilisateur, à
              partir du traitement des informations concernant la fréquence
              d'accès, la personnalisation des pages ainsi que les opérations
              réalisées et les informations consultées. Vous êtes informé que
              l'Éditeur est susceptible de déposer des cookies sur votre
              terminal. Le cookie enregistre des informations relatives à la
              navigation sur le service (les pages que vous avez consultées, la
              date et l'heure de la consultation...) que nous pourrons lire lors
              de vos visites ultérieures.
            </p>
            <p>
              <b>Opt-in pour le dépôt de cookies</b>
            </p>
            <p>
              Nous n'utilisons pas de cookies. Si nous devions en utiliser à
              l’avenir, vous en seriez informé préalablement et auriez la
              possibilité de désactiver ces cookies.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>9 - Conservation des données techniques</h3>
          <div className={styles.info}>
            <p>
              <b>Durée de conservation des données techniques</b>
            </p>
            <p>
              Les données techniques sont conservées pour la durée strictement
              nécessaire à la réalisation des finalités visées ci-avant.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>
            10 - Délai de conservation des données personnelles et
            d'anonymisation
          </h3>
          <div className={styles.info}>
            <p>
              <b>
                Conservation des données pendant la durée de la relation
                contractuelle
              </b>
            </p>
            <p>
              Conformément à l'article 6-5° de la loi n°78-17 du 6 janvier 1978
              relative à l'informatique, aux fichiers et aux libertés, les
              données à caractère personnel faisant l'objet d'un traitement ne
              sont pas conservées au-delà du temps nécessaire à l'exécution des
              obligations définies lors de la conclusion du contrat ou de la
              durée prédéfinie de la relation contractuelle.
            </p>
            <p>
              <b>
                Conservation des données anonymisées au delà de la relation
                contractuelle / après la suppression du compte
              </b>
            </p>
            <p>
              Nous conservons les données personnelles pour la durée strictement
              nécessaire à la réalisation des finalités décrites dans les
              présentes Politiques de confidentialité. Au-delà de cette durée,
              elles seront anonymisées et conservées à des fins exclusivement
              statistiques et ne donneront lieu à aucune exploitation, de
              quelque nature que ce soit.
            </p>
            <p>
              <b>Suppression des données après suppression du compte</b>
            </p>
            <p>
              Des moyens de purge de données sont mis en place afin d'en prévoir
              la suppression effective dès lors que la durée de conservation ou
              d'archivage nécessaire à l'accomplissement des finalités
              déterminées ou imposées est atteinte. Conformément à la loi
              n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
              et aux libertés, vous disposez par ailleurs d'un droit de
              suppression sur vos données que vous pouvez exercer à tout moment
              en prenant contact avec l'Éditeur.
            </p>
            <p>
              <b>Suppression des données après 3 ans d'inactivité</b>
            </p>
            <p>
              Pour des raisons de sécurité, si vous ne vous êtes pas authentifié
              sur le Site pendant une période de trois ans, vous recevrez un
              e-mail vous invitant à vous connecter dans les plus brefs délais,
              sans quoi vos données seront supprimées de nos bases de données.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>11 - Suppression du compte</h3>
          <div className={styles.info}>
            <p>
              <b>Suppression du compte à la demande</b>
            </p>
            <p>
              L'Utilisateur a la possibilité de supprimer son Compte à tout
              moment, par simple demande à l'Éditeur OU par le menu de
              suppression de Compte présent dans les paramètres du Compte le cas
              échéant.
            </p>
            <p>
              <b>
                Suppression du compte en cas de violation de la Politique de
                Confidentialité
              </b>
            </p>
            <p>
              En cas de violation d'une ou de plusieurs dispositions de la
              Politique de Confidentialité ou de tout autre document incorporé
              aux présentes par référence, l'Éditeur se réserve le droit de
              mettre fin ou restreindre sans aucun avertissement préalable et à
              sa seule discrétion, votre usage et accès aux services, à votre
              compte et à tous les Sites.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>
            12- Indications en cas de faille de sécurité décelée par l'Éditeur
          </h3>
          <div className={styles.info}>
            <p>
              <b>Information de l'Utilisateur en cas de faille de sécurité</b>
            </p>
            <p>
              Nous nous engageons à mettre en oeuvre toutes les mesures
              techniques et organisationnelles appropriées afin de garantir un
              niveau de sécurité adapté au regard des risques d'accès
              accidentels, non autorisés ou illégaux, de divulgation,
              d'altération, de perte ou encore de destruction des données
              personnelles vous concernant. Dans l'éventualité où nous
              prendrions connaissance d'un accès illégal aux données
              personnelles vous concernant stockées sur nos serveurs ou ceux de
              nos prestataires, ou d'un accès non autorisé ayant pour
              conséquence la réalisation des risques identifiés ci-dessus, nous
              nous engageons à : Vous notifier l'incident dans les plus brefs
              délais ; Examiner les causes de l'incident et vous en informer ;
              Prendre les mesures nécessaires dans la limite du raisonnable afin
              d'amoindrir les effets négatifs et préjudices pouvant résulter
              dudit incident.
            </p>
            <p>
              <b>Limitation de la responsabilité</b>
            </p>
            <p>
              En aucun cas les engagements définis au point ci-dessus relatifs à
              la notification en cas de faille de sécurité ne peuvent être
              assimilés à une quelconque reconnaissance de faute ou de
              responsabilité quant à la survenance de l'incident en question.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>13- Transfert des données personnelles à l'étranger</h3>
          <div className={styles.info}>
            <p>
              <b>Pas de transfert en dehors de l'Union européenne</b>
            </p>
            <p>
              L'Éditeur s'engage à ne pas transférer les données personnelles de
              ses Utilisateurs en dehors de l'Union européenne.
            </p>
            <a href="https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde">
              <p>
                https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde
              </p>
            </a>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>14- Modification de la politique de confidentialité</h3>
          <div className={styles.info}>
            <p>
              <b>
                En cas de modification de la présente Politique de
                Confidentialité, engagement de ne pas baisser le niveau de
                confidentialité de manière substantielle sans l'information
                préalable des personnes concernées
              </b>
            </p>
            <p>
              Nous nous engageons à vous informer en cas de modification
              substantielle de la présente Politique de Confidentialité, et à ne
              pas baisser le niveau de confidentialité de vos données de manière
              substantielle sans vous en informer et obtenir votre consentement.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>15- Droit applicable et modalités de recours</h3>
          <div className={styles.info}>
            <p>
              <b>Clause d'arbitrage</b>
            </p>
            <p>
              Vous acceptez expressément que tout litige susceptible de naître
              du fait de la présente Politique de Confidentialité, notamment de
              son interprétation ou de son exécution, relèvera d'une procédure
              d'arbitrage soumise au règlement de la plateforme d'arbitrage
              choisie d'un commun accord, auquel vous adhérerez sans réserve.
            </p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <h3>16- Portabilité des données </h3>
          <div className={styles.info}>
            <p>
              <b>Portabilité des données</b>
            </p>
            <p>
              L'Éditeur s'engage à vous offrir la possibilité de vous faire
              restituer l'ensemble des données vous concernant sur simple
              demande. L'Utilisateur se voit ainsi garantir une meilleure
              maîtrise de ses données, et garde la possibilité de les
              réutiliser. Ces données devront être fournies dans un format
              ouvert et aisément réutilisable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PolitiquePrivacite;
