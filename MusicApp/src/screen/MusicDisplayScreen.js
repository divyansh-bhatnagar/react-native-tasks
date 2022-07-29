import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Animated,
  Share,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {musiclibrary} from '../../Data/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');

const MusicDisplayScreen = () => {
  const playBackState = usePlaybackState(); //play and pause

  const progress = useProgress(); //Slider

  const [isPlaying, setIsPlaying] = useState(false);

  const songSlider = useRef(null); // useRef to access the slider

  const [songIndex, setSongIndex] = useState(0);
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackArtist, setTrackArtist] = useState(null);
  const [trackTitle, setTrackTitle] = useState(null);
  const [trackArtwork, setTrackArtwork] = useState(null);

  const ScrollX = useRef(new Animated.Value(0)).current; // Initialize scroll position

  //Setup player (TrackPlayer)
  const setUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
        ],
    });
      await TrackPlayer.add(musiclibrary);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  //(play and pause)
  const togglePlayBack = async playBackState => {
    console.log('playBackState: ', playBackState);
    console.log('state', State.Paused);
    console.log('state', State.Playing);
    // await TrackPlayer.play();
    const currentTrack = await TrackPlayer.getCurrentTrack();
    setIsPlaying(prev => !prev);
    if (currentTrack !== null) {
      if (isPlaying) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  //change song when complete.
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    //if the event.type and playbackTrackChanged is same and next track is not null. Move on to the next track.
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      //destrucutre the track to get the title and artist
      const {title, artist, artwork} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  //skip song
  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId);
  } 

  useEffect(() => {
    setUpPlayer();

    ScrollX.addListener(({value}) => {
      console.log('ScrollX: ', value);
      console.log('Device Width: ', width);

      const index = Math.round(value / width);
      setSongIndex(index);

      console.log(
        'index(Scroll X - value after divide value and width): ',
        index,
      );

      skipTo(index);
      // This is the current scroll position of the HorizontalScrollView
      // We need to set the position of the inner view accordingly.
    });
    return () => {
      ScrollX.removeAllListeners();
      TrackPlayer.destroy();
    };
  }, []);

  const renderItem = ({item}) => {
    console.log('item: ', item);
    return (
      <Animated.View style={styles.renderView}>
        <View style={styles.artworkWrapper}>
          <Image style={styles.img} source={{uri: trackArtwork}} />
        </View>
      </Animated.View>
    );
  };

  const SkipForward = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });

    // TrackPlayer.skipToNext();
  };
  const SkipBackward = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
    //TrackPlayer.skipToPrevious();
  };

  //converting duration from seconds to minutes and seconds.
  const minutes = Math.floor(progress.position / 60);
  const seconds = Math.floor(progress.position % 60);
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  //Repeat Mode Icon
  const repeatIcon = () => {
    if (repeatMode === 'off') {
      return 'repeat-off';
    }
    if (repeatMode === 'track') {
      return 'repeat-once';
    }
    if (repeatMode === 'repeat') {
      return 'repeat';
    }
  }

  const changeRepeatMode = () => {
    if (repeatMode === 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }
    if (repeatMode === 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }
    if (repeatMode === 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share functionality is not added yet , we are working on it.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.mainContainer}>
        <View style={styles.FL}>
          <Animated.FlatList
            ref={songSlider}
            data={musiclibrary}
            keyExtractor={item => item.url}
            renderItem={renderItem}
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16} // This is the number of milliseconds between each scroll event.
            //onScroll is called when the scroll position changes.
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: ScrollX,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />
        </View>
        {/* Songs title and artist are fetched through index from Scroll X */}
        <View>
          <Text style={styles.title}>{trackTitle}</Text>
          <Text style={styles.artist}>{trackArtist}</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#FFFAFA"
            minimumTrackTintColor="#FFFAFA"
            maximumTrackTintColor="#FFFAFA"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
          <View style={styles.progressLabelConatiner}>
            <Text style={styles.progressLabelText}>
              {padTo2Digits(minutes) + ':' + padTo2Digits(seconds)}
            </Text>
            <Text style={styles.progressLabelText}>
              {
                // new Date(progress.duration - progress.duration * 1000).toLocaleTimeString().substring(3)
                padTo2Digits(Math.floor(progress.duration / 60)) +
                  ':' +
                  padTo2Digits(Math.floor(progress.duration % 60))
              }
            </Text>
          </View>
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity onPress={SkipBackward}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#FFFAFA"
              style={styles.controlButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
            <Ionicons
              name={
                playBackState === State.Playing
                  ? 'ios-pause-circle'
                  : 'ios-play-circle'
              }
              size={75}
              color="#FFFAFA"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={SkipForward}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFFAFA"
              style={styles.controlButton}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="heart-outline"
              size={30}
              color="white"
              style={styles.backButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={changeRepeatMode}>
            <MaterialCommunityIcons
              name= {`${repeatIcon()}`}
              size={30}
              color={repeatMode !== 'off' ? '#FFD369' : "white"}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Ionicons
              name="share-outline"
              size={30}
              color="white"
              style={styles.backButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="ellipsis-horizontal"
              size={30}
              color="white"
              style={styles.backButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicDisplayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  FL: {
    width: width,
  },
  renderView: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 20,
    shadowColor: '#C0C0C0',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artist: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 340,
  },
  progressLabelText: {
    color: '#EEEEEE',
  },
  musicControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '60%',
  },
  controlButton: {
    marginTop: 25,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 10,
  },
});
