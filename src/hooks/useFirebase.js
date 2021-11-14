import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useHistory } from "react-router";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const history = useHistory();

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        /*
            .then((result) => {
                const user = result.user;
                console.log("signInWithGoogle", user);
                setUser(user);
                setError('');
               
            }).catch((error) => {
                const errorMessage = error.message;
                console.log("signInWithGoogle", errorMessage);
                setError(errorMessage);
            });
            */


    }


    const createNewUser = (emil, password, name) => {
        //console.log("call");
        //console.log(password);
        createUserWithEmailAndPassword(auth, emil, password)

            .then(result => {
                const user = result.user;
                //console.log(user);
                updateUserName(name);
                setError("");

                console.log("register")
                saveUser(emil, name, 'POST');

            })
            .catch(error => {
                setError(error.message);
            })

    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                setError('');
                window.location.reload();
            }).catch((error) => {
                setError(error.message);
            });
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                //console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setError('');
            //console.log("logOut");
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                //console.log("onAuthStateChanged", user);
                const uid = user.uid;
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return unsubscribe;
    }, [])


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://protected-wave-67020.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        error,
        setError,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        createNewUser,
        processLogin,
        logOut
    }
}

export default useFirebase;