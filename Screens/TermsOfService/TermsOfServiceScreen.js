import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./termsOfService.style";
import Header from "./header/Header";

const TermsOfServiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation}/> */}
      <View style={styles.cardContainer}>
        <ScrollView style={styles.bodyContainer}>
          <Text style={styles.headerTitleText}>TERMS OF SERVICE</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Acceptance of Terms</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              By accessing or using DOBLIFE (the “App”), you agree to be bound
              by these Terms of Use (the “Terms”). If you do not agree to these
              Terms, you may not use the App.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Description of Services</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              DOBLIFE is a basketball app that offers a comprehensive suite of
              features designed to elevate the basketball experience both on and
              off the court. With DOBLIFE , you can:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Track Game Statistics: Record and analyze game metrics.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Join Teams and Leagues: Connect with players, form teams, and
                compete in local leagues and tournaments.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Organize Leagues and Tournaments: Streamline league and
                tournament organization with integrated scheduling and
                scorekeeping tools.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Manage League Operations: Easily schedule games and manage
                operations with friends and local players.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Stay Updated: Keep abreast of the latest news, scores, and
                updates from your league and the broader basketball community.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Earn DobCoins. Participate in an actual game to earn DobCoins
                and redeem DobCoins for rewards, upgrades, or exclusive offers
                within the app.These services are subject to change without
                notice.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Eligibility</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You must be at least 18 years old to use the App. By using the
              App, you represent and warrant that you meet the eligibility
              requirements.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>User Accounts</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              To access certain features of the App, you may need to create an
              account. You agree to:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Provide accurate, current, and complete information.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Maintain the security of your account by not sharing your
                password.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Notify us immediately of any unauthorized use of your account.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>User Account Deletion</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You have the right to delete your account at any time. To delete
              your account, please follow the instructions provided within the
              App or contact us at mentorspireitservices@gmail.com. Upon
              deletion of your account:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                All your personal information and data associated with the
                account will be permanently removed from our systems, except
                where retention is required by law.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                You will lose access to all features and content associated with
                your account.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Use of the App</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>You agree not to:</Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Use the App for any unlawful purposes.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Engage in any activity that interferes with or disrupts the App.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Attempt to gain unauthorized access to any portion of the App.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Intellectual Property</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              All content, trademarks, and data on the App, including but not
              limited to text, graphics, logos, and software, are the property
              of Mentorspire Information Technology Services or its licensors
              and are protected by applicable intellectual property laws.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Privacy Policy</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Your use of the App is also governed by our Privacy Policy, which
              can be found at https://doblife.com/privacy-policy.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Termination</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We may terminate or suspend your account and access to the App at
              our sole discretion, without prior notice or liability, for any
              reason, including if you breach these Terms.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Limitation of Liability</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              To the maximum extent permitted by law,Mentorspire Information
              Technology Services shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any
              loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other
              intangible losses, resulting from:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Your use or inability to use the App.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Any unauthorized access to or use of our servers and/or any
                personal information stored therein.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Any bugs, viruses, trojan horses, or the like that may be
                transmitted to or through the App by any third party.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Indemnification</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You agree to indemnify, defend, and hold harmless [Your Company
              Name], its affiliates, and their respective officers, directors,
              employees, agents, and licensors from and against any claims,
              liabilities, damages, losses, and expenses, including reasonable
              attorney's fees and costs, arising out of or in any way connected
              with:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Your access to or use of the App.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Your violation of these Terms.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Your violation of any third-party rights.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Governing Law</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              These Terms shall be governed and construed in accordance with the
              laws of the Philippines, without regard to its conflict of law
              provisions.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Changes to Terms</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We reserve the right to modify these Terms at any time. We will
              provide notice of any changes by posting the new Terms on the App.
              Your continued use of the App following the posting of any changes
              constitutes acceptance of those changes.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Contact Us</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If you have any questions about these Terms, please contact us at{" "}
              <Text style={styles.emailText}>
                mentorspireitservices@gmail.com.
              </Text>
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.understandButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.understandText}>
              I Understand the terms of service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TermsOfServiceScreen;
