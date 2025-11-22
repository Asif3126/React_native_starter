/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Accounts Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Accounts</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountCard}>
            <View style={styles.cardHeader}>
              <View style={styles.bankIcon}>
                <Text style={styles.iconText}>🏦</Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>Current Account</Text>
            <Text style={styles.cardSubtitle}>Account Account A... *1234</Text>
            <Text style={styles.cardBalance}>₦ 3,000.00</Text>
          </View>
        </View>

        {/* Global View Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Global View</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.globalViewContainer}>
            <View style={[styles.accountCard, styles.globalViewCard]}>
              <View style={styles.cardHeader}>
                <View style={styles.globeIcon}>
                  <Text style={styles.iconText}>🌐</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>HSBC Global View Personal</Text>
              <Text style={styles.cardSubtitle}>*1234</Text>
              <Text style={styles.cardBalance}>₦ 3,000.00</Text>
            </View>
            <View style={[styles.accountCard, styles.globalViewCard]}>
              <View style={styles.cardHeader}>
                <View style={styles.globeIcon}>
                  <Text style={styles.iconText}>🌐</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>HSBC Global View Personal</Text>
              <Text style={styles.cardSubtitle}>*1234</Text>
              <Text style={styles.cardBalance}>₦ 3,000.00</Text>
            </View>
          </View>
        </View>

        {/* Accounts Actions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accounts Actions</Text>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionLeft}>
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>☰</Text>
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Services</Text>
                <Text style={styles.actionSubtitle}>All account tools</Text>
              </View>
            </View>
            <Text style={styles.arrowIcon}>&gt;&gt;&gt;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionLeft}>
              <View style={[styles.actionIcon, styles.bankActionIcon]}>
                <Text style={styles.iconText}>🏦</Text>
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Apply now</Text>
                <Text style={styles.actionSubtitle}>
                  Explore all types of accounts
                </Text>
              </View>
            </View>
            <Text style={styles.arrowIcon}>&gt;&gt;&gt;</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  viewAllLink: {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: '500',
  },
  accountCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  globalViewContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  globalViewCard: {
    flex: 1,
    marginBottom: 0,
  },
  cardHeader: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  bankIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
  },
  globeIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
  },
  iconText: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
  },
  cardBalance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bankActionIcon: {
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
  },
  actionIconText: {
    fontSize: 20,
    color: '#000000',
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#666666',
  },
  arrowIcon: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 8,
  },
});

export default App;
