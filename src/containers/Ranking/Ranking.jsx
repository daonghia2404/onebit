import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import IconMetaRank4 from '@/assets/icons/icon-meta-rank-4.svg';
import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';
import BgNews from '@/assets/images/bg-news.png';
import Carousels from '@/components/Carousels';
import ModalCheckMission from '@/containers/ModalCheckMission';

import { dataRankingList } from './Ranking.data';
import './Ranking.scss';
import { Paths } from '@/pages/routers';

const Ranking = () => {
  const deviceWidth = useSelector((state) => state.uiReducer.device.width);
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);
  const isLargeDesktop = deviceWidth > 1440;
  const [currentRank, setCurrentRank] = useState(4);
  const [refCarousel, setRefCarousel] = useState(null);
  const [visibleFollowChannel, setVisibleFollowChannel] = useState(false);

  const handleInitialCarousel = (ref) => {
    setRefCarousel(ref);
  };

  const handleChangeCurrentRank = (level) => {
    setCurrentRank(level);
  };

  const handleOpenFollowChannelModal = () => {
    setVisibleFollowChannel(true);
  };
  const handleCloseFollowChannelModal = () => {
    setVisibleFollowChannel(false);
  };

  useEffect(() => {
    if (refCarousel) {
      refCarousel.slickGoTo(currentRank - 1);
    }
  }, [refCarousel]);

  return (
    <div className="Ranking">
      <div className="Ranking-bg">
        <img src={BgNews} alt="" />
      </div>
      <div className="container">
        <div className="Ranking-wrapper">
          <div className="Ranking-my-rank">
            <Row gutter={isLargeDesktop ? 32 : 16}>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <div className="Ranking-my-rank-item flex items-start">
                  <div className="Ranking-my-rank-item-image">
                    <img src={IconMetaRank4} alt="" />
                  </div>
                  <div className="Ranking-my-rank-item-info">
                    <div className="Ranking-my-rank-item-info-subtitle subheading">CURRENT RANK</div>
                    <div className="Ranking-my-rank-item-info-title big-title-02">Level 4</div>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <div className="Ranking-my-rank-item flex items-start">
                  <div className="Ranking-my-rank-item-info">
                    <div className="Ranking-my-rank-item-info-subtitle subheading">Verification Status</div>
                    <div
                      className="Ranking-my-rank-item-info-title big-title-02"
                      style={{ color: EIconColor.DANGER_2 }}
                    >
                      Unverified
                    </div>
                    <div className="Ranking-my-rank-item-info-btn flex">
                      <Button title="Verify Now" link={Paths.Verify} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <div className="Ranking-my-rank-item flex items-start">
                  <div className="Ranking-my-rank-item-info">
                    <div className="Ranking-my-rank-item-info-subtitle subheading">YOUR STAKE</div>
                    <div className="Ranking-my-rank-item-info-title big-title-02">2200</div>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <div className="Ranking-my-rank-item flex items-start">
                  <div className="Ranking-my-rank-item-info">
                    <div className="Ranking-my-rank-item-info-subtitle subheading">$ONEB LEFT TO NEXT RANK</div>
                    <div className="Ranking-my-rank-item-info-title big-title-02">300</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="Ranking-list">
            {isMobile ? (
              <Carousels
                onInit={handleInitialCarousel}
                centerMode
                slidesToShow={1}
                dots={false}
                arrows={false}
                className="Ranking-list-image"
                afterChange={(index) => handleChangeCurrentRank(index + 1)}
              >
                {dataRankingList.map((item) => (
                  <Col key={item.level} className={classNames({ active: item.level === currentRank })}>
                    <div className={classNames('Ranking-list-image-item', `level-${item.level}`)}>
                      <img src={item.image} alt="" />
                      <span className="heading-02">Level {item.level}</span>
                    </div>
                  </Col>
                ))}
              </Carousels>
            ) : (
              <div className="Ranking-list-image">
                <Row gutter={16} justify="space-between" align="middle">
                  {dataRankingList.map((item) => (
                    <Col key={item.level} className={classNames({ active: item.level === currentRank })}>
                      <div
                        className={classNames('Ranking-list-image-item', `level-${item.level}`)}
                        onClick={() => handleChangeCurrentRank(item.level)}
                      >
                        <img src={item.image} alt="" />
                        <span className="heading-02">Level {item.level}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            <div className="Ranking-list-description">
              <table>
                <tr>
                  <td>
                    <span className="heading-03">Min</span>
                  </td>
                  <td>
                    <span className="body-01">1000 ONEB</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="heading-03">Winner Selection</span>
                  </td>
                  <td>
                    <span className="body-01">Lottery</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="heading-03">Max Individual Allocation</span>
                  </td>
                  <td>
                    <span className="body-01">$600</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="heading-03">Withdrawal Delay</span>
                  </td>
                  <td>
                    <span className="body-01">12 Days</span>
                  </td>
                </tr>
                <tr className="break-mb">
                  <td>
                    <span className="heading-03">Benefit</span>
                  </td>
                  <td>
                    <span className="body-01">
                      KOL in an early stage with a special deal (revenue split) to provide the land and build their
                      iconic worlds, organize virtual events to give them visualized topics to interact with their
                      followers to join XANA to visit their lands. They also incentivize them according to the number of
                      social engagements. Micro-influencers also have the opportunity to be rewarded by their social
                      mining activities for Metaverse with driving traffic to Metaverse.
                    </span>
                  </td>
                </tr>
                <tr className="break-mb">
                  <td>
                    <span className="heading-03">Mission</span>
                  </td>
                  <td>
                    <div className="flex items-center justify-between">
                      <span className="body-01">Required quests that you need to complete before you can rank up</span>
                      <Button
                        title="Check"
                        size={isMobile ? 'small' : 'middle'}
                        onClick={handleOpenFollowChannelModal}
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ModalCheckMission
        visible={visibleFollowChannel}
        onClose={handleCloseFollowChannelModal}
        onSubmit={handleCloseFollowChannelModal}
      />
    </div>
  );
};

export default Ranking;