const fetch = require("node-fetch");

const go = async (handle, followerAddress) => {
    const LENS_API_ENDPOINT = "https://api.lens.dev/graphql";
    try {
        let profileByHandle;

        await fetch(LENS_API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            query Profile {
                profile(request: { handle: "${handle}" }) {
                id
                }
            }
            ` 
            }),
        })
        .then(res => res.json())
        .then(res => profileByHandle = res.data);
    
        if ((profileByHandle === null) || (profileByHandle.profile === null)) {
            console.log("Profile not found");
            return;
        }
    
        const profileId = profileByHandle.profile.id;
    
        let follows;
        await fetch(LENS_API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            query DoesFollow {
                doesFollow(request: { 
                    followInfos: [
                        {
                            followerAddress: "${followerAddress}",
                            profileId: "${profileId}"
                        }
                    ] 
                }) {
                    follows
                }
            }
            ` 
            }),
        })
        .then(res => res.json())
        .then(res => follows = res.data.doesFollow[0].follows);
    
        return follows;
    } catch (e) {
      console.log(e);
    }
    return false;
};

(async () => {
    console.log(await go("vitalik.lens", 
    "0xcbc9dd04153508782b444e3255a9663e9a9953ca"))
})()