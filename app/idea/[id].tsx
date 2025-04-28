import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import {router, useLocalSearchParams} from "expo-router";
import { useFetch } from '@/services/useFetch';
import { fetchIdea } from '@/services/api';
import { formatDate } from '@/lib/utils';
import Markdown from 'react-native-markdown-display';

const IdeaDetails = () => {
	const { id } = useLocalSearchParams();

	const { data: idea, loading, error } = useFetch(() => 
		fetchIdea(id as string)
	);

	if(!idea) return <ActivityIndicator size={100}/>

	return (
		<View className='flex-1'>
			<ScrollView contentContainerClassName='pb-80'>
				<View>
					<View className="absolute z-10 bg-primary pattern flex justify-center items-center flex-col py-10 px-6"
						style={{
							bottom: 0,
							left: '50%',
							transform: [{ translateX: '-50%'}],
							opacity: 0.8
						}}
					>
						<Text className="tag">{ formatDate(idea?._createdAt) }</Text>
						<Text className="heading">{ idea.title }</Text>
						<Text className="sub-heading">{ idea.description }</Text>
					</View>
					<Image className="w-full h-[550px]"
						source={{ uri: idea?.image}}
						resizeMode='cover'
					/>
				</View>
				
				<View className="flex-row justify-between mt-5 px-5">
					<View className='flex-row'>
						<Image source={{
							uri: idea?.author?.image
								? idea?.author.image
								: "https://placehold.co/48x48"
						}} className="size-[48px] mr-1"/>
						<View className="flex-col">
							<Text className="text-black font-bold text-xl">{ idea?.author?.name }</Text>
							<Text className="text-base font-bold">@{ idea?.author?.username }</Text>
						</View>
					</View>
					<View className="flex-end">
						<Text className="category-tag">{ idea.category }</Text>
					</View>
				</View>

				<View className="m-5">
					<Markdown>
						{ idea.pitch }
					</Markdown>
				</View>
			</ScrollView>

			<TouchableOpacity className='bg-primary absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50'
				onPress={() => router.back()}
			>
				{/* <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff"/> */}
				<Text className="text-white font-semibold text-base">
					Go Back
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default IdeaDetails;
const styles = StyleSheet.create({})