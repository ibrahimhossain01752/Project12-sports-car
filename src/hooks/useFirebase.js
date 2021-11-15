import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init"
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, updateProfile, signInWithPopup, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                StoreUserInformation(newUser);
                // updateProfile(auth.currentUser, {
                //     displayName: name
                //   }).then(() => {

                //   }).catch((error) => {

                //   });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                //console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              const user = result.user;
              setAuthError('');
              StoreUserInformation(result.user.name, result.user.email);

            }).catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }






// resgisteratiuon information is storeing firebase & also my database mongobd......
  const StoreUserInformation = ({name, email}) => {
    fetch('http://localhost:5000/signup/userInformation', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({name, email})
    }).then(res => res.json())
      .then(data => console.log(data))
   }
  
  
  
  // Check Admin or not............ 
//   useEffect( () => {
//     fetch(https://grisly-werewolf-53088.herokuapp.com/checkAdmin/${user.email})
//       .then(res=> res.json())
//       .then(data => {
//         setAdmin(data.admin)
//         console.log(data)
//       })
//   }, [user?.email])








    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;