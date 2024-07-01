import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Search = ({ data, setData }) => {
    const [search, setSearch] = useState('');
    const [sortVisible, setSortVisible] = useState(false);
    const searchRef = useRef();

    const onSearch = (text) => {
        if (text === '') {
            setData(data); // Reset to original data if search is empty
        } else {
            const tempList = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
            setData(tempList);
        }
    };

    const sortData = (order) => {
        let sortedData = [...data];
        if (order === 'lowToHigh') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (order === 'highToLow') {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (order === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating); // Sort by rating descending
        }
        setData(sortedData);
        setSortVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Icon name="search1" size={20} color="gray" style={styles.icon} />
                <TextInput
                    ref={searchRef}
                    placeholder="Search item here..."
                    style={styles.input}
                    value={search}
                    onChangeText={txt => {
                        onSearch(txt);
                        setSearch(txt);
                    }}
                />
                {search !== '' && (
                    <TouchableOpacity
                        style={styles.clearButton}
                        onPress={() => {
                            searchRef.current.clear();
                            onSearch('');
                            setSearch('');
                        }}>
                        <Icon name="closecircle" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity style={styles.sortButton} onPress={() => setSortVisible(true)}>
                <Icon name="bars" size={34} color="gray" />
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType="slide"
                visible={sortVisible}
                onRequestClose={() => setSortVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Sort By</Text>
                        <TouchableOpacity style={styles.modalOption} onPress={() => sortData('lowToHigh')}>
                            <Text>Price: Low to High</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOption} onPress={() => sortData('highToLow')}>
                            <Text>Price: High to Low</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOption} onPress={() => sortData('rating')}>
                            <Text>Rating: High to Low</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOption} onPress={() => setSortVisible(false)}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
    },
    clearButton: {
        marginLeft: 10,
    },
    sortButton: {
        marginRight: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 250,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalOption: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
});

export default Search;
