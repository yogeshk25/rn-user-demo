
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../models/User';

const STORAGE_KEY = 'users2';

const getFormattedLocation = (location: any) => {
  return `${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`;
}

const fetchRemoteUsers = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20');
    if (response.ok) {
      const data = await response.json();
      await saveUsers(data?.results);
    }
  } catch (error) {
    console.log('Unable to fetch');
  }
};

const saveUsers = async (remoteUsers?: any[]) => {
  let usersMap = new Map<string, User>();
  try {
    if (remoteUsers && remoteUsers.length > 0) {
      const existingUsers = await fetchLocalUsers();
      existingUsers.forEach((u) => {
        usersMap.set(u.email, u);
      });
      remoteUsers.forEach((u) => {
        const user = new User(u.name.first, u.name.last, u.dob.age, u.email, u.gender, getFormattedLocation(u.location));
        usersMap.set(user.email, user);
      });
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(usersMap.values())));
    }
  } catch (error) {
    console.log('Unable to save', error);
  }
}

const fetchLocalUsers = async (search?: string) => {
  const usersJson =  await AsyncStorage.getItem(STORAGE_KEY);
  const users: User[] = usersJson ? JSON.parse(usersJson) : [];
  if (search) {
    return users.filter((u) => u.firstName.includes(search) || u.lastName.includes(search) || u.email.includes(search));
  }
  return users;
};

export { fetchRemoteUsers, fetchLocalUsers }
