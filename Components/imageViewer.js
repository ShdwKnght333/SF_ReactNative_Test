import { StyleSheet, Image } from 'react-native';

export default function SFImageViewer({ imageShown }) {
    return( <Image source={imageShown} style={styles.image} />)
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
    },
})