import React, {useLayoutEffect} from 'react'
import { View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImageUpload = ({navigation}) => {
    const [images,setImages] = useState([]);

    useLayoutEffect(() => {

        const handleUpload = ( image ) => {
            ImagePicker.showImagePicker({ maxWidth: 500, maxHeight: 500}, (res) => {
                if(res.didCancel){
                    console.log('User cancelled');
                    return;
                }

                const img = {
                    uri: res.uri,
                    type: res.type,
                    name: res.fileName || res.uri.subStr(res.uri.lastIndexOf('/') + 1),

                }
                setImages(prev => prev.concat(img));

            })

        }
        navigation.setOptions({
            headerRight: () => <IconButton icon="plus" onPress={handleUpload}/>
        })
    }, [navigation])

  return (
   <View>
    <Container>
        <SubHeading>
            Cover Image
        </SubHeading>
        <Surface>
            <Image source={{uri: ''}} style={styles.img}/>
        </Surface>
    </Container>

   </View>
  )
}

const styles = StyleSheet.create({
    CoverImg : {
        width: '100',
        height: 200,
        resizeMode: 'contain',
    }
})

export default ImageUpload